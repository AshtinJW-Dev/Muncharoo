import React from 'react';
import egg from "../assets/images/favicon.png";


const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row d-flex align-items-center justify-content-center text-center">
                    <div className="col-md-3">
                        <div className="p-3 bg-light">
                            <img src={egg} className='w-50 h-50 bg-danger rounded'></img>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 bg-light">
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                ></input>
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 bg-light socials">
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-pinterest"></i>
                            <i class="bi bi-youtube"></i>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Never Miss a Recipe!</h5>
                        <p>
                            Sign up to the Muncharoo Newsletter
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright || Website By {" "}
                <a className="text-dark" href="https://walterhouse.co.za/">Walter House</a>
            </div>
        </footer>
    );
};

export default Footer;
