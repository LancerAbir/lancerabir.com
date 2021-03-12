import React from "react";
import { Link } from "react-router-dom";
//** CV Link */
import cv from "../../../assets/cv/Abir-Kumar-Dhar-CV-update.pdf";
//** Import Image */
import faviconLight from "../../../assets/favicon-light.png";

const Navbar2 = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-floating">
         <div className="container">
            <Link className="navbar-brand" to="/">
               <img
                  style={{ width: "60px" }}
                  src={faviconLight}
                  alt=""
                  width="40"
               />
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
               <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item dropdown">
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
                        <Link className="dropdown-item" to="/">
                           Homepage 1
                        </Link>
                        <Link className="dropdown-item" to="/home2">
                           Homepage 2
                        </Link>
                     </div>
                  </li>
                  <li className="nav-item active">
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
                     <button className="btn btn-primary rounded-pill">
                        Download CV
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar2;
