const sql = require('../config/db.config');

const User = function (user) {
    this.pseudo = user.pseudo;
    this.email = user.email;
    this.password = user.password;
};

User.getAll = result => {
    sql.query('SELECT * FROM users', (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(null, err);
            return;
        }

        console.log('Utilisateurs :', res);
        result(null, res);
    });
};

User.getById = (id, result) => {
    sql.query('SELECT * FROM users WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Utilisateur trouvé :', res[0]);
            result(null, res[0]);
            return;
        }

        // Si l'utilisateur n'est pas trouvé
        result({ kind: 'not_found' }, null);
    });
};

User.create = (newUser, result) => {
    sql.query('INSERT INTO users SET ?', newUser, (err, res) => {
        if (err) {
            console.log('Erreur :', err);
            result(err, null);
            return;
        }

        console.log('Utilisateur créé :', { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.updateById = (id, user, result) => {
    sql.query(
        'UPDATE users SET pseudo = ?, email = ?, password = ? WHERE id = ?',
        [user.pseudo, user.email, user.password, id],
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

            console.log('Utilisateur mis à jour :', { id: id, ...user });
            result(null, { id: id, ...user });
        }
    );
};

User.remove = (id, result) => {
    sql.query('DELETE FROM users WHERE id = ?', id, (err, res) => {
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

        console.log('Utilisateur supprimé avec ID :', id);
        result(null, res);
    });
};

module.exports = User;