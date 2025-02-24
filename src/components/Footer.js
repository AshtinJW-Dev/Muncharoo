import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import egg from "../../public/assets/images/favicon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-lg-start py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center">
          {/* Logo Section */}
          <div className="md:w-1/4 flex justify-center">
            <Image
              src={egg}
              alt="Muncharoo Logo"
              width={96}
              height={96}
              className="rounded-full"
              priority
            />
          </div>

          {/* Search Bar */}
          <div className="md:w-2/4">
            <form className="flex space-x-2" role="search">
              <Input type="search" placeholder="Search" aria-label="Search" className="flex-grow" />
              <Button variant="outline">Search</Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="md:w-1/4 flex justify-center space-x-4">
            {["instagram", "facebook", "pinterest", "youtube"].map((platform) => (
              <a key={platform} href="#!" className="text-gray-600 hover:text-gray-900 text-2xl">
                <i className={`bi bi-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Additional Links */}
        <div className="flex flex-col md:flex-row justify-between mt-8 text-center md:text-left">
          {/* Newsletter Signup */}
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h5 className="text-xl font-bold">Never Miss a Recipe!</h5>
            <p>Sign up for the Muncharoo Newsletter</p>
          </div>

          {/* Footer Links */}
          {["Links", "More Links"].map((section, index) => (
            <div key={index} className="md:w-1/4">
              <h5 className="text-xl font-bold">{section}</h5>
              <ul className="list-none space-y-2">
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <li key={i}>
                      <a href="#!" className="text-gray-600 hover:underline">
                        Link {i + 1}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-4 bg-gray-200">
        © 2024 Muncharoo || Built by
        <a className="text-blue-600 ml-1" href="https://ajwdev.netlify.app/" target="_blank" rel="noopener noreferrer">
          Ashtin Walter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
