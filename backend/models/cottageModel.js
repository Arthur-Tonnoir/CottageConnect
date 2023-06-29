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
    this.max_personnes = cottage.max_personnes
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

Cottage.findByMaxPersonneAndDateCreationAndVille = (max_personnes, date_creation, ville, result) => {
    sql.query('SELECT id, name, date_creation, content, dayprice, caution, adress, res_count, id_city, id_categories, id_users, max_personnes FROM cottages WHERE max_personnes = ? AND id_city = ? AND date_creation = ?',
    [max_personnes, ville, date_creation], 
    (err, res) =>{
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
        }
    )
}

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
        'UPDATE cottages SET name = ?, date_creation = ? , content = ?, dayprice = ?, caution = ?, adress = ?, res_count = ?, id_city = ?, id_categories = ?, id_users = ?, max_personnes = ?  WHERE id = ?',
        [cottage.name, cottage.date_creation, cottage.content, cottage.dayprice, cottage.caution, cottage.adress, cottage.res_count, cottage.id_city, cottage.id_categories, cottage.id_users, cottage.max_personnes, id],
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

// fonction recupérer cottages par Nombre de reservations
Cottage.res_Count = (limit, result) => {
    sql.query(`SELECT * FROM cottages ORDER BY res_count DESC limit ${limit}`, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(null, err);
            return;
        }

        console.log('Cottages :', res);
        result(null, res);
    });
};

// fonction recupérer cottages aléatoirement
Cottage.res_Rand = result => {
    sql.query('SELECT * FROM cottages ORDER BY RAND() limit 10', (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(null, err);
            return;
        }

        console.log('Cottages :', res);
        result(null, res);
    });
};

module.exports = Cottage;