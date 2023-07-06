const sql = require('../config/db.config');

const Adress = function (adress) {
    this.rue_number = adress.rue_number;
    this.rue_name = adress.rue_name;
    this.code_postal = adress.code_postal;
    this.ville_name = adress.ville_name;
    this.id_commodities = adress.id_commodities;
    this.id_regions = adress.id_regions;
}

Adress.findAll = result => {
    sql.query('SELECT id, rue_number, rue_name, code_postal, ville_name, id_commodities, id_regions FROM adress', (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(null, err);
            return;
        }

        console.log('Adress :', res);
        result(null, res);
    });
};

Adress.findById = (id, result) => {
    sql.query('SELECT rue_number, rue_name, code_postal, ville_name, id_commodities, id_regions FROM adress WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Adress trouvé :', res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: 'not_found' }, null);
    });
};

Adress.create = (newAdress, result) => {
    sql.query('INSERT INTO adress SET ?', newAdress, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        console.log('Adress créé :', { id: res.insertId, ...newAdress });
        result(null, { id: res.insertId, ...newAdress });
    });
};

Adress.update = (id, adress, result) => {
    sql.query(
        'UPDATE adress SET rue_number = ?, rue_name = ? , code_postal = ?, ville_name = ?, id_commodities = ?, id_regions WHERE id = ?',
        [adress.rue_number, adress.rue_name, adress.code_postal, adress.ville_name,  adress.id_commodities, adress.id_regions, id],
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

            console.log('Adress mis à jour :', { id: id, ...adress });
            result(null, { id: id, ...adress });
        }
    );
};

Adress.delete = (id, result) => {
    sql.query('DELETE FROM adress WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {
            result({ kind: 'not_found' }, null);
            return;
        }

        console.log('Adress supprimé avec ID :', id);
        result(null, res);
    });
};

module.exports = Adress;