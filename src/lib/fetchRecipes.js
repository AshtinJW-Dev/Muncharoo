import mysql from 'mysql2';
import axios from 'axios';


// Create a MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'muncharoo',       // Change this to your DB username
  password: '1122',       // Change this to your DB password
  database: 'muncharoo_db'
});

// Function to fetch and insert recipes
async function fetchAndInsertRecipes() {
  try {
    // Fetch random recipes from TheMealDB API
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    const meals = response.data.meals;

    // Loop through meals and insert into database
    meals.forEach(meal => {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.push({
            ingredient: meal[`strIngredient${i}`],
            measure: meal[`strMeasure${i}`]
          });
        }
      }

      // Insert into recipes table
      const query = `
        INSERT INTO recipes (name, image_url, description, ingredients, instructions)
        VALUES (?, ?, ?, ?, ?)
      `;
      db.query(query, [
        meal.strMeal,
        meal.strMealThumb,
        meal.strCategory,
        JSON.stringify(ingredients),
        meal.strInstructions
      ], (err, results) => {
        if (err) {
          console.error('Error inserting recipe:', err);
        } else {
          console.log('Recipe inserted with ID:', results.insertId);
        }
      });
    });
  } catch (error) {
    console.error('Error fetching data from TheMealDB API:', error);
  }
}

// Call the function to insert data
fetchAndInsertRecipes();
