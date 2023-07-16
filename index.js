const mysql = require('mysql');
// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('¡Hola, mundo!');
// });

// app.listen(3000, () => {
//     console.log('server running on port', 3000);
// });

let connection = mysql.createConnection({
    host: 'localhost',
    database: 'training',
    user: 'root',
    password: 'Xabialonso14$',
    port: 3450,
});

connection.connect( (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Conectado a la base de datos.');
});

// const data = { fecha: '27-05-2023', cantidad_personas: 5, usuario_id: 5, estado_reserva: 'completo' }

// connection.query('INSERT INTO reservas SET ?', data, (err, res) => {
//     if (err) throw err;
//     console.log('Datos insertados correctamente!');
//     connection.end();
// })