const sql = require('../config/db.config');

const Cottage = function (cottage){
    this.name = cottage.name;
    this.date_creation = cottage.date_creation;
    this.content = cottage.content;
    this.dayprice = cottage.dayprice;
    this.caution = cottage.caution;
    this.adress = cottage.adress;
    this.res_count = cottage.res_count;
    this.id_city = cottage.id_city;
    this.id_categories = cottage.id_categories;
    this.id_users = cottage.id_users;
}

Cottage.findAll = result => {
    sql.query('SELECT * FROM cottages', (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(null, err);
            return;
        }

        console.log('Cottages :', res);
        result(null, res);
    });
};

Cottage.findById = (id, result) => {
    sql.query('SELECT * FROM cottages WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Cottages trouvé :', res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: 'not_found' }, null);
    });
};

Cottage.create = (newCottages, result) => {
    sql.query('INSERT INTO cottages SET ?', newCottages, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        console.log('Cottages créé :', { id: res.insertId, ...newCottages });
        result(null, { id: res.insertId, ...newCottages });
    });
};

Cottage.update = (id, cottage, result) => {
    sql.query(
        'UPDATE cottages SET name = ?, date_creation = ? , content = ?, dayprice = ?, caution = ?, adress = ?, res_count = ?, id_city = ?, id_categories = ?, id_users = ?  WHERE id = ?',
        [cottage.name, cottage.date_creation, cottage.content, cottage.dayprice, cottage.caution, cottage.adress, cottage.res_count, cottage.id_city, cottage.id_categories, cottage.id_users, id],
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

            console.log('Cottage mis à jour :', { id: id, ...cottage });
            result(null, { id: id, ...cottage });
        }
    );
};

Cottage.delete = (id, result) => {
    sql.query('DELETE FROM cottages WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {

            result({ kind: 'not_found' }, null);
            return;
        }

        console.log('Cottage supprimé avec ID :', id);
        result(null, res);
    });
};

module.exports = Cottage;