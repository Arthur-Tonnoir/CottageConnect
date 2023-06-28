const sql = require('../config/db.config');

const Citie = function (citie){
    this.name = citie.name;
    this.cp = citie.cp;
    this.id_region = citie.id_region;
}

Citie.findAll = result => {
    sql.query('SELECT * FROM cities', (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(null, err);
            return;
        }

        console.log('Cities :', res);
        result(null, res);
    });
};

Citie.findById = (id, result) => {
    sql.query('SELECT * FROM cities WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Citie trouvé :', res[0]);
            result(null, res[0]);
            return;
        }

        // Si la citie n'est pas trouvé
        result({ kind: 'not_found' }, null);
    });
};

Citie.create = (newCitie, result) => {
    sql.query('INSERT INTO cities SET ?', newCitie, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        console.log('Citie créé :', { id: res.insertId, ...newCitie });
        result(null, { id: res.insertId, ...newCitie });
    });
};

Citie.update = (id, citie, result) => {
    sql.query(
        'UPDATE users SET name = ?, cp = ? , id_region = ?  WHERE id = ?',
        [citie.name, citie.cp, citie.id_region, id],
        (err, res) => {
            if (err) {
                console.log('Erreur :', err);
                result(err, null);
                return;
            }

            if (res.affectedRows === 0) {
                // Si l'utilisateur n'est pas trouvé
                result({ kind: 'not_found' }, null);
                return;
            }

            console.log('Utilisateur mis à jour :', { id: id, ...citie });
            result(null, { id: id, ...citie });
        }
    );
};

Citie.delete = (id, result) => {
    sql.query('DELETE FROM cities WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {
            // Si l'utilisateur n'est pas trouvé
            result({ kind: 'not_found' }, null);
            return;
        }

        console.log('Citie supprimé avec ID :', id);
        result(null, res);
    });
};

module.exports = Citie;