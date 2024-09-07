import React from "react";
import munch from "../assets/images/Muncharoo- text.png";
import egg from "../assets/images/favicon.png";

export default function Navbar() {
  return (
    <div className="">
      <div className="head">
        <div className="d-flex justify-content-evenly align-items-center ">
          <div className="bg-dark rounded m-2 d-flex justify-content-evenly align-items-center">
            <img src={egg} width="80" height="80"></img>
            <img
              src={munch}
              className="bg-danger rounded m-1 img-fluid h-25 w-50"
              alt=""
            ></img>
            <img src={egg} width="80" height="80"></img>
          </div>
          <div>
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
          <div className="socials"><i class="bi bi-instagram"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-pinterest"></i>
            <i class="bi bi-youtube"></i></div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  My Munchies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Top Recipes
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Chicken</a></li>
                  <li><a className="dropdown-item" href="#">Beef</a></li>

                  <li><a className="dropdown-item" href="#">Fish</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
