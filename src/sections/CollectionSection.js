import React from 'react'
import RecipeRow from '../components/RecipeRow';

function CollectionSection() {
    const recipes = [
        {
            title: "Spaghetti Carbonara",
            description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
            imageUrl: "https://via.placeholder.com/300"
        },
        {
            title: "Chicken Curry",
            description: "A flavorful dish made with chicken, spices, tomatoes, and coconut milk.",
            imageUrl: "https://via.placeholder.com/300"
        },
        {
            title: "Chocolate Cake",
            description: "A rich and moist chocolate cake topped with creamy chocolate frosting.",
            imageUrl: "https://via.placeholder.com/300"
        }
    ];
  return (
      <div>CollectionSection
      
      <RecipeRow recipes={recipes} /></div >
  )
}

export default CollectionSection