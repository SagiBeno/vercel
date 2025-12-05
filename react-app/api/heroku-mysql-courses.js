/* endpoint: /api/heroku-mysql-courses */
import mysql from 'serverless-mysql';

var db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
    }
})

export default async function handler (req, res) {
    if (req.method == 'GET') {
        console.log('db: ', db)
        const result = await db.query('SELECT id, name FROM courses')
        console.log('result: ', result)
        await db.end()
        return res.status(200).json(result)
    }
}