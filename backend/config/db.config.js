const mysql = require('mysql2');

// Configurez votre connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'cottages',
  password: 'tadV-CBbWrCUH43',
  database: 'cottages',
});

connection.connect(error => {
  if (error) throw error;
  console.log('Connected to the database.');
});

module.exports = connection;