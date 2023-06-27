const sql = require('../config/db.config');

const Picture = function (picture){
    this.picture_name = picture.picture_name;
    this.picurre_path = picture.picurre_path;
    this.id_cottages = picture.id_cottages;
}

Picture.findAll = result => {
    sql.query('SELECT * FROM pictures', (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(null, err);
            return;
        }

        console.log('Pictures :', res);
        result(null, res);
    });
};

Picture.findById = (id, result) => {
    sql.query('SELECT * FROM picture WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Picture trouvé :', res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: 'not_found' }, null);
    });
};

Picture.create = (newPicture, result) => {
    sql.query('INSERT INTO pictures SET ?', newPicture, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        console.log('Picture créé :', { id: res.insertId, ...newPicture });
        result(null, { id: res.insertId, ...newPicture });
    });
};

Picture.update = (id, picture, result) => {
    sql.query(
        'UPDATE pictures SET picture_name = ?, picurre_path = ? , id_cottages = ? WHERE id = ?',
        [picture.picture_name, picture.picurre_path, picture.id_cottages, id],
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

            console.log('Picture mis à jour :', { id: id, ...picture });
            result(null, { id: id, ...picture });
        }
    );
};

Picture.delete = (id, result) => {
    sql.query('DELETE FROM pictures WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        if (res.affectedRows === 0) {
            result({ kind: 'not_found' }, null);
            return;
        }

        console.log('Picture supprimé avec ID :', id);
        result(null, res);
    });
};

module.exports = Picture;