const Linktable = require('../models/linktableModel');

exports.findAll = (req, res) => {
    Linktable.findAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'Une erreur s\'est produite lors de la récupération des linktable.'
            });
        } else {
            res.send(data);
        }
    });
};

exports.findById = (req, res) => {
    const id = req.params.id;

    Linktable.findById(id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Linktable avec l'ID ${id} non trouvé.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la récupération de la linktable avec l'ID ${id}.`
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

    const newLinktable = new Linktable({
        id_cities: req.body.id_cities,
        id_commodities: req.body.id_commodities
    });

    Linktable.create(newLinktable, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'Une erreur s\'est produite lors de la création de la linktable.'
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

    const updated = new Linktable({
        id_cities: req.body.id_cities,
        id_commodities: req.body.id_commodities
    });

    Linktable.update(id, updated, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Linktable avec l'ID ${id} non trouvé.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la mise à jour de la linktable avec l'ID ${id}.`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Linktable.delete(id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Linktable avec l'ID ${id} non trouvé.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la suppression de la linktable avec l'ID ${id}.`
                });
            }
        } else {
            res.send({ message: 'Linktable supprimé avec succès !' });
        }
    });
};