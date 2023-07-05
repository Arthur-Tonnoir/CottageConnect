const sql = require("../config/db.config");

const Reservation = function (reservation) {
  this.created_at = reservation.created_at;
  this.date_start = reservation.date_start;
  this.date_end = reservation.date_end;
  this.duration = reservation.duration;
  this.nombre_personnes = reservation.nombre_personnes;
  this.total = reservation.total;
  this.id_cottages = reservation.id_cottages;
  this.id_users = reservation.id_users;
};

Reservation.findAll = (result) => {
  sql.query("SELECT * FROM reservations", (err, res) => {
    if (err) {
      console.log("Erreur :", err);
      result(null, err);
      return;
    }

    console.log("Reservations :", res);
    result(null, res);
  });
};

Reservation.findById = (id, result) => {
  sql.query("SELECT * FROM reservations WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("Erreur :", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Reservation trouvé :", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Reservation.create = (newReservation, result) => {
  sql.query(
    `SELECT * FROM reservations WHERE id_cottages = ? AND
    (date_start <= ? AND date_end >= ?)`,
    [newReservation.id_cottages, newReservation.date_end, newReservation.date_start],
    (err, res) => {
      if (err) {
        console.log(err);
      }
      if (res.length === 0) {
        sql.query(
          "INSERT INTO reservations SET ?",
          newReservation,
          (err, res) => {
            if (err) {
              console.log("Erreur :", err);
              result(err, null);
              return;
            }

            console.log("Reservation créé :", {
              id: res.insertId,
              ...newReservation,
            });
            result(null, { id: res.insertId, ...newReservation });
          }
        );
      } else {
        result({ Erreur: "Plage de reservation indisponible" }, null);
      }
    }
  );
};

Reservation.update = (id, reservation, result) => {
  sql.query(
    "UPDATE reservations SET created_at = ?, date_start = ? , date_end = ?, duration = ?, nombre_personnes = ?, total = ?, id_cottages = ?  WHERE id = ?",
    [
      reservation.created_at,
      reservation.date_start,
      reservation.date_end,
      reservation.duration,
      reservation.nombre_personnes,
      reservation.total,
      reservation.id_cottages,
      reservation.id_users,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Erreur :", err);
        result(err, null);
        return;
      }

      if (res.affectedRows === 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Rservation mis à jour :", { id: id, ...reservation });
      result(null, { id: id, ...reservation });
    }
  );
};

Reservation.delete = (id, result) => {
  sql.query("DELETE FROM reservations WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("Erreur :", err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Reservation supprimé avec ID :", id);
    result(null, res);
  });
};

module.exports = Reservation;
