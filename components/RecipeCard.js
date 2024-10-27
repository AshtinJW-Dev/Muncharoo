
import React from 'react';
import Image from "next/image"


const RecipeCard = ({ title, description, imageUrl }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
            <Image  src={imageUrl} className="card-img-top" alt={title} width={300}
                        height={300}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
