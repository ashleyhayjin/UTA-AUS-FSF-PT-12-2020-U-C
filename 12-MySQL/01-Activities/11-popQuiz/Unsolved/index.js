const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '451208abC!',
    database: 'new_db'
}); 

connection.connect((err) => {
    if (err) throw err;
    connection.query('SELECT * FROM stuff', (error, result) => {
        if (error) throw error;
        console.log('result', result);
        connection.end();

    });
});
