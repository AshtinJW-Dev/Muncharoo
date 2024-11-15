// components/HeroSection.js
import React from 'react';
import Image from "next/image"

<Image
    src="/path/to/image.jpg"
    alt="description"
    width={500}  // Set appropriate width
    height={300} // Set appropriate height
    layout="responsive" // Optional: use layout options as needed
/>


const HeroSection = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6 bg-dark">
                    <Image
                        src="https://via.placeholder.com/500"
                        alt="Hero"
                        className="img-fluid w-100 h-100"
                        width={500}
                        height={300}
                    />
                </div>
                <div className="col-md-6 p-4 text-center">
                    <h1 className="display-4">Welcome to Muncharoo!</h1>
                    <p className="lead">
                        Looking for some inspiration?
                    </p>
                    <button className="btn btn-primary btn-lg"></button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
