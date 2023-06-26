const User = require('../models/userModel');

exports.findAll = (req, res) => {
    User.findAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'Une erreur s\'est produite lors de la récupération des utilisateurs.'
            });
        } else {
            res.send(data);
        }
    });
};

exports.findById = (req, res) => {
    const id = req.params.id;

    User.findById(id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Utilisateur avec l'ID ${id} non trouvé.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la récupération de l'utilisateur avec l'ID ${id}.`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Le contenu de la requête ne peut pas être vide.'
        });
    }

    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        is_admin: req.body.is_admin,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        postal: req.body.postal,
        city: req.body.city,
        avatar: req.body.avatar,
        website: req.body.website
    });

    User.create(newUser, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'Une erreur s\'est produite lors de la création de l\'utilisateur.'
            });
        } else {
            res.send(data);
        }
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Le contenu de la requête ne peut pas être vide.'
        });
    }

    const id = req.params.id;

    const updated = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        is_admin: req.body.is_admin,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        postal: req.body.postal,
        city: req.body.city,
        avatar: req.body.avatar,
        website: req.body.website
        
    });

    User.update(id, updated, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Utilisateur avec l'ID ${id} non trouvé.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la mise à jour de l'utilisateur avec l'ID ${id}.`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    User.delete(id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Utilisateur avec l'ID ${id} non trouvé.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la suppression de l'utilisateur avec l'ID ${id}.`
                });
            }
        } else {
            res.send({ message: 'Utilisateur supprimé avec succès !' });
        }
    });
};