import React from 'react'

const HeroSection = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6 bg-dark">
                    <img
                        src="https://via.placeholder.com/500"
                        alt="Hero"
                        className="img-fluid w-100 h-100"
                    />
                </div>
                <div className="col-md-6 p-4 text-center">
                    <h1 className="display-4">Welcome to Muncharoo!</h1>
                    <p className="lead">
                        Looking for some inspiration? 
                    </p>
                    <button className="btn btn-primary btn-lg">Let's Get Cooking!</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection