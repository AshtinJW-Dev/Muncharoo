import db from '../../src/lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      if (!db) {
        throw new Error('Database module not found');
      }
      const [recipes] = await db.query('SELECT * FROM recipes');
      res.status(200).json(recipes);
    } catch (error) {
      console.error('Database query failed:', error);
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const mappedData = data.meals ? data.meals.map(meal => ({
          id: meal.idMeal,
          name: meal.strMeal,
          category: meal.strCategory,
          area: meal.strArea,
          image: meal.strMealThumb,
          // Add other fields as necessary
        })) : [];
        res.status(200).json(mappedData);
      } catch (apiError) {
        console.error('Fetching dummy data failed:', apiError);
        res.status(500).json({ message: 'Error retrieving recipes', error: apiError.message });
      }
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
