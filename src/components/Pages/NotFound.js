import React from "react";

//** Import Image */
import heroMini from "../../assets/img/hero_mini.svg";

//** Import Template Parts */
import Navbar2 from "../TemplatesParts/Header2/Navbar2";
import Footer1 from "../TemplatesParts/Footer1/Footer1";
import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <div>
         {/** Navbar **/}
         <Navbar2></Navbar2>

         <main className="bg-light">
            <div
               className="page-hero-section bg-image hero-mini"
               style={{ backgroundImage: `url(${heroMini})` }}
            >
               <div className="hero-caption">
                  <div className="container fg-white h-100">
                     <div className="row justify-content-center align-items-center text-center h-100">
                        <div className="col-lg-6">
                           <h3 className="mb-4 fw-medium">404 Not Found !</h3>
                           <nav aria-label="breadcrumb">
                              <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                                 <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                 </li>
                                 <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                 >
                                    Not Found !
                                 </li>
                              </ol>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>

         <div className="jumbotron jumbotron-fluid">
            <div className="container">
               <h1 className="display-4">404 Not Found!</h1>
               <p className="lead">
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
               </p>
            </div>
         </div>

         {/** Footer **/}
         <Footer1></Footer1>
      </div>
   );
};

export default NotFound;
