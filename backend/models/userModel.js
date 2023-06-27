const sql = require("../config/db.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

const User = function (user) {
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
  this.is_admin = user.is_admin;
};

User.getAll = (result) => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("Erreur :", err);
      result(null, err);
      return;
    }
    console.log("Utilisateurs :", res);
    result(null, res);
  });
};

User.getById = (id, result) => {
  sql.query("SELECT * FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("Erreur :", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Utilisateur trouvé :", res[0]);
      result(null, res[0]);
      return;
    }

    // Si l'utilisateur n'est pas trouvé
    result({ kind: "not_found" }, null);
  });
};

User.create = (user, result) => {
  bcrypt.hash(user.password.toString(), 10, (err, hash) => {
    if (err) {
      result({ Error: "Error during hashing" }, null);
      return;
    }
    user.password = hash;
    sql.query("INSERT INTO users SET ?", user, (err, res) => {
      if (err) {
        console.log("Erreur :", err);
        result(err, null);
        return;
      }

      console.log("Utilisateur créé :", { id: res.insertId, ...user });
      result(null, { id: res.insertId, ...user });
    });
  });
};

User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?",
    [user.username, user.email, user.password, id],
    (err, res) => {
      if (err) {
        console.log("Erreur :", err);
        result(err, null);
        return;
      }

      if (res.affectedRows === 0) {
        // Si l'utilisateur n'est pas trouvé
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Utilisateur mis à jour :", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("Erreur :", err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      // Si l'utilisateur n'est pas trouvé
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Utilisateur supprimé avec ID :", id);
    result(null, res);
  });
};

User.login = (username, password, result) => {
  sql.query("SELECT * FROM users WHERE username = ?", username, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    if (res.length > 0) {
      const username = res[0].username;
      bcrypt.compare(password, res[0].password, (err, res) => {
        if (err) {
          result({ error: "PASSWORD compare error" }, null);
          return;
        }
        if (res) {
          const token = jwt.sign({ username }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });
          result(null, { Status: "Success", Token: token });
          return;
        } else {
          result({ error: "Password Incorrect" }, null);
          return;
        }
      });
    } else {
      result({ error: "USERNAME INCORRECT" }, null);
    }
  });
};

module.exports = User;
