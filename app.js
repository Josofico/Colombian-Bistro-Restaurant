const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'sakila'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL!');
});