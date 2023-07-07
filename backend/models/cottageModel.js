const sql = require('../config/db.config');

const Cottage = function (cottage){
    this.name = cottage.name;
    this.date_creation = cottage.date_creation;
    this.content = cottage.content;
    this.dayprice = cottage.dayprice;
    this.caution = cottage.caution;
    this.res_count = cottage.res_count;
    this.max_personnes = cottage.max_personnes;
    this.id_prestation = cottage.id_prestation;
    this.id_categories = cottage.id_categories;
    this.id_proprio = cottage.id_proprio;
    this.id_adress = cottage.id_adress;
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
    sql.query('SELECT name, date_creation, content, dayprice, caution, res_count, max_personnes, id_categories, id_prestation, id_proprio, id_adress FROM cottages WHERE id = ?', id, (err, res) => {
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

Cottage.findByMombrePersonneAndDateStartAndDateEndAndVille = (nombre_personnes, date_start, date_end, city, result) => {
    sql.query('SELECT id FROM adress WHERE city = ?', 
    [city], 
    (errAdress, resAdress) => {
        if(errAdress){
            console.log('Erreur :', errAdress);
        }
        if(resAdress.length)
        {
            console.log('Adresse trouvé :', resAdress[0]);
            const id_adress = (resAdress[0].id);
            sql.query('SELECT name, date_creation, content, dayprice, caution, res_count, max_personnes, id_categories, id_prestation, id_proprio, id_adress FROM cottages WHERE id = (SELECT id_cottages FROM reservation AS rs, cottages as co WHERE (rs.date_start <= ? AND rs.date_end >= ?) AND co.id_adress = ? AND rs.nombre_personnes = ?  ) ',
            [date_start, date_end, id_adress, nombre_personnes ], 
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
    })
    
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
        'UPDATE cottages SET name = ?, date_creation = ? , content = ?, dayprice = ?, caution = ?, res_count = ?, max_personnes = ?, id_categories = ?, id_proprio = ?, id_adress = ?  WHERE id = ?',
        [cottage.name, cottage.date_creation, cottage.content, cottage.dayprice, cottage.caution, cottage.res_count, cottage.max_personnes,cottage.id_categories, cottage.id_proprio, cottage.id_adress, id],
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