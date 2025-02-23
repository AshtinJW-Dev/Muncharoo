import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 bg-gray-100">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Muncharoo!</h1>
        <p className="text-lg text-gray-600">Looking for some inspiration?</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          Explore Recipes
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="https://placehold.co/600x400"
          alt="Delicious food"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
