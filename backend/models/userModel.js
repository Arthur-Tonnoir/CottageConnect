const sql = require('../config/db.config');

const User = function (user) {
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.is_admin = user.is_admin;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.phone = user.phone;
    this.postal = user.postal;
    this.city = user.city;
    this.avatar = user.avatar;
    this.website = user.website;
};

User.findAll = result => {
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

User.findById = (id, result) => {
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

User.update = (id, user, result) => {
    sql.query(
        'UPDATE users SET username = ?, password = ? , email = ?, is_admin = ?, firstname = ?, lastname = ?, phone = ?, postal = ?, city = ?, avatar = ?, website = ?  WHERE id = ?',
        [user.username, user.password, user.email, user.is_admin, user.firstname, user.lastname, user.phone, user.postal, user.city, user.avatar, user.website, id],
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

User.delete = (id, result) => {
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