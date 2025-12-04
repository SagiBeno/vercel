import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    const conn = neon(process.env.DATABASE_URL);
    console.log('conn: ', conn);

    if (req.method == 'GET') {
        const result = await conn`SELECT * FROM cats LIMIT 20`;
        console.log('get result: ', result);
        return res.status(200).json(result);
    }

    if (req.method == 'POST') {
        // TODO - implement POST /api/neon-cats
    }

    if (req.method == 'PATCH') {
        // TODO - implement PATCH /api/neon-cats
    }

    if (req.method == 'DELETE') {
        // TODO - implement DELETE /api/neon-cats
    }

    return res.status(500).json([{error: 'Internal Server Error'}]);
}