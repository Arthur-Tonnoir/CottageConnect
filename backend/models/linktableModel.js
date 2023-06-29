const sql = require('../config/db.config');

const Linktable = function(linktable){
    this.id_cities = linktable.id_cities;
    this.id_commodities = linktable.id_commodities;
}

Linktable.findAll = result => {
    sql.query('SELECT * FROM link_table', (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(null, err);
            return;
        }

        console.log('LinkTable :', res);
        result(null, res);
    });
};

Linktable.findById = (id, result) => {
    sql.query('SELECT * FROM link_table WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('LinkTable trouvé :', res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: 'not_found' }, null);
    });
};

Linktable.create = (newLinkTable, result) => {
    sql.query('INSERT INTO link_table SET ?', newLinkTable, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        console.log('LinkTable créé :', { id: res.insertId, ...newLinkTable });
        result(null, { id: res.insertId, ...newLinkTable });
    });
};

Linktable.update = (id, linktable, result) => {
    sql.query(
        'UPDATE link_table SET id_cities = ?, id_commodities = ? WHERE id = ?',
        [linktable.id_cities, linktable.id_commodities, id],
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

            console.log('Linktable mis à jour :', { id: id, ...linktable });
            result(null, { id: id, ...linktable });
        }
    );
};

Linktable.delete = (id, result) => {
    sql.query('DELETE FROM link_table WHERE id = ?', id, (err, res) => {
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

        console.log('Linktable supprimé avec ID :', id);
        result(null, res);
    });
};

module.exports = Linktable;