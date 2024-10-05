const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'my_user',
    password: 'root',
    database: 'foothills_database',
    port: 5432,
});

client.connect();

client.query('SELECT * FROM patient', (err, res) => {
    console.log(err, res);
    client.end();
});