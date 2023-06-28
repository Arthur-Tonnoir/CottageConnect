const User = require("../models/userModel");

exports.getAllUsers = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la récupération des utilisateurs.",
      });
    } else {
      res.send(data);
    }
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;

  User.getById(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Utilisateur avec l'ID ${id} non trouvé.`,
        });
      } else {
        res.status(500).send({
          message: `Erreur lors de la récupération de l'utilisateur avec l'ID ${id}.`,
        });
      }
    } else {
      res.send(data);
    }
  });
};

exports.createUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu de la requête ne peut pas être vide.",
    });
  }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    is_admin: false,
  });

  User.create(newUser, (err, data) => {
    if (err) {
      res.send({
        message:
          err.Error ||
          err.sqlMessage ||
          "Une erreur s'est produite lors de la création de l'utilisateur.",
      });
    } else {
      res.send({ Status: "Success", Data: data });
    }
  });
};

exports.updateUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Le contenu de la requête ne peut pas être vide.",
    });
  }

  const id = req.params.id;

  const updatedUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  User.updateById(id, updatedUser, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Utilisateur avec l'ID ${id} non trouvé.`,
        });
      } else {
        res.status(500).send({
          message: `Erreur lors de la mise à jour de l'utilisateur avec l'ID ${id}.`,
        });
      }
    } else {
      res.send(data);
    }
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;

  User.remove(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Utilisateur avec l'ID ${id} non trouvé.`,
        });
      } else {
        res.status(500).send({
          message: `Erreur lors de la suppression de l'utilisateur avec l'ID ${id}.`,
        });
      }
    } else {
      res.send({ message: "Utilisateur supprimé avec succès !" });
    }
  });
};

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.login(username, password, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.cookie("token", data.Token);
      res.send(data.Status);
    }
  });
};
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ status: "Success" });
};
