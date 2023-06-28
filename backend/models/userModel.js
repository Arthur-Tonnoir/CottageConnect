const sql = require("../config/db.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

const User = function (user) {
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.is_admin = user.is_admin;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.phone = user.phone;
    this.postal = user.postal;
    this.city = user.city;
    this.avatar = user.avatar;
    this.website = user.website;
};

User.findAll = result => {
    sql.query('SELECT * FROM users', (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(null, err);
            return;
        }

        console.log('Utilisateurs :', res);
        result(null, res);
    });
};

User.findById = (id, result) => {
    sql.query('SELECT * FROM users WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Utilisateur trouvé :', res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: 'not_found' }, null);
    });
};



User.create = (newUser, result) => {
  bcrypt.hash(newUser.password.toString(), 10, (err, hash) => {
    if (err) {
      result({ Error: "Error during hashing" }, null);
      return;
    }
    if (newUser.password === "") {
      result({ Error: "Error : Password must not be empty" }, null);
      return;
    }
    if (newUser.password < 3) {
      result({ Error: "Error : Password must be 3 or more character" }, null);
      return;
    }
    if (newUser.username.length < 3) {
      result({ Error: "Error : Username must be more than 3 character" }, null);
      return;
    }
    if (newUser.email.length < 3) {
      result({ Error: "Error : Email must not be empty" }, null);
      return;
    }
    newUser.password = hash;
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
      if (err) {
        console.log("Error :", err);
        result(err, null);
        return;
      }

      console.log("User created :", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  });
};


User.update = (id, user, result) => {
    sql.query(
        'UPDATE users SET username = ?, password = ? , email = ?, is_admin = ?, firstname = ?, lastname = ?, phone = ?, postal = ?, city = ?, avatar = ?, website = ?  WHERE id = ?',
        [user.username, user.password, user.email, user.is_admin, user.firstname, user.lastname, user.phone, user.postal, user.city, user.avatar, user.website, id],
        (err, res) => {
            if (err) {
                console.log('Erreur :', err);
                result(err, null);
                return;
            }
            if (res.affectedRows === 0) {
              result({ kind: "not_found" }, null);
              return;
            }
            console.log("Utilisateur mis à jour :", { id: id, ...user });
            result(null, { id: id, ...user });
        }
    );
};

User.delete = (id, result) => {
    sql.query('DELETE FROM users WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log("Erreur :", err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
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
      const role = res[0].is_admin;
      bcrypt.compare(password, res[0].password, (err, res) => {
        if (err) {
          result({ error: "PASSWORD compare error" }, null);
          return;
        }
        if (res) {
          const token = jwt.sign({ username, role }, process.env.JWT_SECRET, {
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
