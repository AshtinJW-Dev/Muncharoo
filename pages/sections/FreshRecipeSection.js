// components/FreshRecipeSection.js
"use client"; // Add this directive to indicate it's a client component

import React, { useEffect, useState } from 'react';
import RecipeRow from '../../components/RecipeRow';

function FreshRecipeSection() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('/api/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <div className='container'>
            <h2>Fresh Recipes</h2>
            <RecipeRow recipes={recipes} />
        </div>
    );
}

export default FreshRecipeSection;
