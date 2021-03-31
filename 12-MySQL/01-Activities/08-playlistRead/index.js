const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: '451208abC!',

    database: 'playlist_db'

});

const afterConnection = () => {
    connection.query('SELECT * FROM songs', (err, res) => {
        if (err) throw err;
        console.log(err);
        console.log(res);
        connection.end();

    });

}

const queryChristian = () => {
    const query = connection.query('SELECT * FROM songs WHERE genre=?', ['christian'], (err, res))
        if(err) throw err;
        res.forEach(({ id, title, artist, genre}) => {
            console.log(`id: ${id} title: ${title} artist: ${artist} `)
        })
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    afterConnection();
});