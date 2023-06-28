const sql = require('../config/db.config');

const Facture = function (facture) {
    this.date_start = facture.date_start;
    this.cottage_name = facture.cottage_name;
    this.cottage_adress = facture.cottage_adress;
    this.client_id = facture.client_id;
    this.client_username = facture.client_username;
    this.client_firstname = facture.client_firstname;
    this.client_lastname = facture.client_lastname;
    this.client_email = facture.client_email;
    this.client_phone = facture.client_phone;
    this.client_postal= facture.client_postal;
    this.client_city = facture.client_city;
    this.proprio_id = facture.proprio_id;
    this.proprio_firstname = facture.proprio_firstname;
    this.proprio_username = facture.proprio_username;
    this.proprio_lastname = facture.proprio_lastname;
    this.proprio_email = facture.proprio_email;
    this.proprio_phone = facture.proprio_phone;
    this.proprio_postal = facture.proprio_postal;
    this.nombre_personnes = facture.nombre_personnes;
    this.proprio_city = facture.proprio_city;
    this.duration = facture.duration;
    this.total = facture.total;
    this.cottage_id = facture.cottage_id;
};

Facture.findAll = result => {
    sql.query('SELECT * FROM facture', (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(null, err);
            return;
        }

        console.log('Factures :', res);
        result(null, res);
    });
};

Facture.findById = (id, result) => {
    sql.query('SELECT * FROM facture WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('facture trouvée :', res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: 'not_found' }, null);
    });
};

Facture.create = (newFacture, result) => {
    sql.query('INSERT INTO facture SET ?', newFacture, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        console.log('Facture créée :', { id: res.insertId, ...newFacture});
        result(null, { id: res.insertId, ...newFacture });
    });
};

Facture.update = (id, facture, result) => {
    sql.query(
        'UPDATE facture SET date_start = ?, cottage_name = ? , cottage_adress = ?, client_id = ?, client_username = ?, client_firstname = ?, client_lastname = ?, client_email = ?, client_phone = ?, client_postal = ?, client_city = ?, proprio_id = ?, proprio_firstname = ?, proprio_username = ?, proprio_lastname = ?, proprio_email = ?, proprio_phone = ?, proprio_postal = ?, nombre_personnes = ?, proprio_city = ?, duration = ?, total = ?, cottage_id = ?, WHERE id = ?',
        [facture.date_start, facture.cottage_name, facture.cottage_adress, facture.client_id, facture.client_username, facture.client_firstname, facture.client_lastname, facture.client_email, facture.client_phone, facture.client_postal, facture.client_city, facture.proprio_id, facture.proprio_firstname, facture.proprio_username, facture.proprio_lastname, facture.proprio_email, facture.proprio_phone, facture.proprio_postal , facture.nombre_personnes, facture.proprio_city, facture.duration, facture.total, facture.cottage_id, id],
        (err, res) => {
            if (err) {
                console.log('Erreur :', err);
                result(err, null);
                return;
            }

            if (res.affectedRows === 0) {
                result({ kind: 'not_found' }, null);
                return;
            }

            console.log('Facture mise à jour :', { id: id, ...facture });
            result(null, { id: id, ...facture });
        }
    );
};

Facture.delete = (id, result) => {
    sql.query('DELETE FROM facture WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {
            result({ kind: 'not_found' }, null);
            return;
        }

        console.log('Facture supprimée avec ID :', id);
        result(null, res);
    });
};

module.exports = Facture;