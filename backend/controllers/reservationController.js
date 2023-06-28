const Reservation = require('../models/reservationModel');

exports.findAll = (req, res) => {
    Reservation.findAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'Une erreur s\'est produite lors de la récupération des reservations.'
            });
        } else {
            res.send(data);
        }
    });
};

exports.findById = (req, res) => {
    const id = req.params.id;

    Reservation.findById(id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Reservation avec l'ID ${id} non trouvé.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la récupération de la reservation avec l'ID ${id}.`
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

    const newReservation = new Reservation({
        create_at: req.body.create_at,
        date_start: req.body.date_start,
        duration: req.body.duration,
        nombre_personnes: req.body.nombre_personnes,
        total: req.body.total,
        id_cottages: req.body.id_cottages,
        id_users: req.body.id_users
        
    });

    Reservation.create(newReservation, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'Une erreur s\'est produite lors de la création de la reservation.'
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

    const updated = new Reservation({
        create_at: req.body.create_at,
        date_start: req.body.date_start,
        duration: req.body.duration,
        nombre_personnes: req.body.nombre_personnes,
        total: req.body.total,
        id_cottages: req.body.id_cottages,
        id_users: req.body.id_users
        
    });

    Reservation.update(id, updated, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Reservation avec l'ID ${id} non trouvé.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la mise à jour de la reservation avec l'ID ${id}.`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Reservation.delete(id, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `Reservation avec l'ID ${id} non trouvé.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la suppression de la reservation avec l'ID ${id}.`
                });
            }
        } else {
            res.send({ message: 'Reservation supprimé avec succès !' });
        }
    });
};