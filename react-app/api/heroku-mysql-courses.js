/* endpoint*/
import mysql from 'serverless-mysql';

var db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATASASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
    }
})

export default async function handler (req, res) {
    if (req.method == 'GET') {
        const result = await db.query('SELECT id, name FROM courses')
        await db.end()
        return res.status(200).json(result)
    }
}