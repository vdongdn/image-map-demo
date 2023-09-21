const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dev',
    password : 'Admin#321',
    database : 'cemetery_dev'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connect successfully!!!!');
});

module.exports = {connection};