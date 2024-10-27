import React from 'react';
import egg from "../public/assets/images/favicon.png";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"


const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center text-lg-start">
            <div className="container mx-auto py-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-center">
                    <div className="md:w-1/4">
                        <div className="p-4 bg-gray-100">
                        <Image src={egg} className='w-24 h-24 bg-red-500 rounded-full' alt="Logo" width={500}
                        height={300} />
                        </div>
                    </div>

                    <div className="md:w-2/4">
                        <div className="p-4">
                            <form className="flex space-x-2" role="search">
                                <Input 
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    className="flex-grow"
                                />
                                <Button variant="outline">Search</Button>
                            </form>
                        </div>
                    </div>

                    <div className="md:w-1/4">
                        <div className="p-4 flex space-x-4 justify-center">
                            <a href="#!" className="text-gray-600 hover:text-gray-900">
                                <i className="bi bi-instagram text-2xl"></i>
                            </a>
                            <a href="#!" className="text-gray-600 hover:text-gray-900">
                                <i className="bi bi-facebook text-2xl"></i>
                            </a>
                            <a href="#!" className="text-gray-600 hover:text-gray-900">
                                <i className="bi bi-pinterest text-2xl"></i>
                            </a>
                            <a href="#!" className="text-gray-600 hover:text-gray-900">
                                <i className="bi bi-youtube text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between mt-8">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <h5 className="text-xl font-bold">Never Miss a Recipe!</h5>
                        <p>Sign up for the Muncharoo Newsletter</p>
                    </div>

                    <div className="md:w-1/4">
                        <h5 className="text-xl font-bold">Links</h5>
                        <ul className="list-none space-y-2">
                            <li><a href="#!" className="text-gray-600 hover:underline">Link 1</a></li>
                            <li><a href="#!" className="text-gray-600 hover:underline">Link 2</a></li>
                            <li><a href="#!" className="text-gray-600 hover:underline">Link 3</a></li>
                            <li><a href="#!" className="text-gray-600 hover:underline">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="md:w-1/4">
                        <h5 className="text-xl font-bold">More Links</h5>
                        <ul className="list-none space-y-2">
                            <li><a href="#!" className="text-gray-600 hover:underline">Link 1</a></li>
                            <li><a href="#!" className="text-gray-600 hover:underline">Link 2</a></li>
                            <li><a href="#!" className="text-gray-600 hover:underline">Link 3</a></li>
                            <li><a href="#!" className="text-gray-600 hover:underline">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center py-4 bg-gray-200">
                © 2024 Copyright || Built By 
                <a className="text-blue-600 ml-1" href="https://ajwdev.netlify.app/">Ashtin Walter</a>
            </div>
        </footer>
    );
};

export default Footer;
