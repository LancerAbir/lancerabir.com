import React from "react";
import { Link } from "react-router-dom";
//** Import Image */
import faviconLight from "../../../assets/favicon-light.png";
const Footer1 = () => {
   return (
      <div className="page-footer-section bg-dark fg-white">
         <div className="container">
            <div className="row mb-5 py-3">
               <div className="col-sm-6 col-lg-2 py-3">
                  <h5 className="mb-3">Pages</h5>
                  <ul className="menu-link">
                     <li>
                        <Link to="/npm" className="">
                           NPM
                        </Link>
                     </li>
                     <li>
                        <Link to="#" className="">
                           Features
                        </Link>
                     </li>
                     <li>
                        <Link to="#" className="">
                           Customers
                        </Link>
                     </li>
                     <li>
                        <Link to="#" className="">
                           Pricing
                        </Link>
                     </li>
                     <li>
                        <Link to="#" className="">
                           GDPR
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="col-sm-6 col-lg-2 py-3">
                  <h5 className="mb-3">Company</h5>
                  <ul className="menu-link">
                     <li>
                        <Link to="/about" className="">
                           About
                        </Link>
                     </li>
                     <li>
                        <Link to="" className="">
                           Team
                        </Link>
                     </li>
                     <li>
                        <Link to="#" className="">
                           Leadership
                        </Link>
                     </li>
                     <li>
                        <Link to="#" className="">
                           Careers
                        </Link>
                     </li>
                     <li>
                        <Link to="#" className="">
                           HIRING!
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="col-md-6 col-lg-4 py-3">
                  <h5 className="mb-3">Contact</h5>
                  <ul className="menu-link">
                     <li>
                        <Link to="/contact" className="">
                           Contact Us
                        </Link>
                     </li>
                     <li>
                        <Link to="/contact" className="">
                           lancerabir.com@gmail.com
                        </Link>
                     </li>
                     <li>
                        <Link to="/contact" className="">
                           anjan.o24@gmail.com
                        </Link>
                     </li>
                     <li>
                        <Link to="/contact" className="">
                           +88 01677729892
                        </Link>
                     </li>
                     <li>
                        <Link to="/contact" className="">
                           +88 01916306987
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="col-md-6 col-lg-4 py-3">
                  <h5 className="mb-3">Subscribe</h5>
                  <p>
                     Get some offers, news, or update features of application
                  </p>
                  <form method="POST">
                     <div className="input-group">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Your email.."
                        />
                        <div className="input-group-append">
                           <button type="submit" className="btn btn-primary">
                              <span className="mai-send"></span>
                           </button>
                        </div>
                     </div>
                  </form>

                  {/** <!-- Social Media Button --> */}
                  <div className="mt-4">
                     <Link to="#" className="btn btn-fab btn-primary fg-white">
                        <span className="mai-logo-facebook"></span>
                     </Link>
                     <Link to="#" className="btn btn-fab btn-primary fg-white">
                        <span className="mai-logo-twitter"></span>
                     </Link>
                     <Link to="#" className="btn btn-fab btn-primary fg-white">
                        <span className="mai-logo-instagram"></span>
                     </Link>
                     <Link to="#" className="btn btn-fab btn-primary fg-white">
                        <span className="mai-logo-google"></span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         <hr />

         <div className="container">
            <div className="row">
               <div className="col-12 col-md-6 py-2">
                  <img
                     style={{
                        backgroundColor: "#fff",
                        padding: "8px",
                        width: "60px",
                     }}
                     src={faviconLight}
                     alt=""
                     width="40"
                  />
                  {/** <!-- Please don't remove or modify the credits below --> */}
                  <p className="d-inline-block ml-2">
                     Copyright &copy;
                     <Link
                        to="http://www.lancerabir.com/"
                        className="fg-white fw-medium"
                     >
                        LANCER ABIR
                     </Link>
                     . All rights reserved
                  </p>
               </div>
               <div className="col-12 col-md-6 py-2">
                  <ul className="nav justify-content-end">
                     <li className="nav-item">
                        <Link to="#" className="nav-link">
                           Terms of Use
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="#" className="nav-link">
                           Privacy Policy
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="#" className="nav-link">
                           Cookie Policy
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer1;
