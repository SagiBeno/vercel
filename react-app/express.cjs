const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const dotenv = require('dotenv');
const dotenvConfig = dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = 3333;

console.log('dotenvConfig: ', dotenvConfig);
var conn = mysql.createConnection({
    host: 'TODO',
    user: 'TODO',
    password: 'TODO',
    database: 'TODO'
});

app.get('/courses', (req, res) => {
    conn.query(
        `SELECT id, name FROM courses`,
        (err, result) => {
            if (err) {
                console.warn;
                return res.status(500).json({error: err});
            } 
            
            else {
                console.log('Result: ', result);
                return res.status(200).json({data: result});
            }
        }
    );
});

app.listen(port, (err) => {
    if (err) console.warn;
    else console.log('Express backend server runs on localhost: ', port)
});