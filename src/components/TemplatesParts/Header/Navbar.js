import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/favicon.png";

//** CV Link */
import cv from "../../../assets/cv/Abir-Kumar-Dhar-CV.pdf";

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-floating">
         <div className="container">
            <Link className="navbar-brand" to="#">
               <img style={{ width: "60px" }} src={logo} alt="" width="40" />
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarToggler"
               aria-controls="navbarToggler"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggler">
               <ul className="navbar-nav ml-lg-5 mt-3 mt-lg-0">
                  <li className="nav-item dropdown active">
                     <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                     >
                        Home
                     </Link>
                     <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                     >
                        <Link className="dropdown-item active" to="/">
                           Homepage 1
                        </Link>
                        <Link className="dropdown-item" to="/home2">
                           Homepage 2
                        </Link>
                     </div>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/about">
                        About
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/blog">
                        Blog
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/contact">
                        Contact
                     </Link>
                  </li>
               </ul>
               <div className="ml-auto my-2 my-lg-0">
                  <Link to={cv} target="_blank">
                     <button className="btn btn-dark rounded-pill">
                        Download CV
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
