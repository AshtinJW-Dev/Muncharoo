// components/CategoriesSection.js
import React from 'react';
import RecipeRow from '../../components/RecipeRow';

function CategoriesSection() {
    const recipes = [
        {
            title: "Beef",
            description: "A classic.",
            imageUrl: "https://via.placeholder.com/300"
        },
        {
            title: "Chicken",
            description: "A flavorful.",
            imageUrl: "https://via.placeholder.com/300"
        },
        {
            title: "Fish",
            description: "A rich and moist.",
            imageUrl: "https://via.placeholder.com/300"
        }
    ];

    return (
        <div className='container'>
            <h2>Categories</h2>
            <RecipeRow recipes={recipes} />
        </div>
    );
}

export default CategoriesSection;
