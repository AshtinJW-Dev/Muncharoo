
import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeRow = ({ recipes }) => {
    return (
        <div className="container my-5">
            <div className="row">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe._id}
                        id={recipe._id}
                        title={recipe.title}
                        description={recipe.description}
                        imageUrl={recipe.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecipeRow;
