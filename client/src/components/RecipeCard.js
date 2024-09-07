import React from 'react';

const RecipeCard = ({ title, description, imageUrl }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">View Recipe</a>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
