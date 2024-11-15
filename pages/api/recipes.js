// pages/api/recipes.js
import db from '../../src/lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [recipes] = await db.query('SELECT * FROM recipes');
      res.status(200).json(recipes);
    } catch (error) {
      console.error('Database query failed:', error);
      res.status(500).json({ message: 'Error retrieving recipes', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
