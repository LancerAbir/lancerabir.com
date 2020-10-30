import React from "react";
import { Link } from "react-router-dom";

//** Import Image */
import heroMini from "../../assets/img/hero_mini.svg";

//** Import Template Parts */
import Footer1 from "../TemplatesParts/Footer1/Footer1";
import Navbar2 from "../TemplatesParts/Header2/Navbar2";

const Npm = () => {
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
                           <h3 className="mb-4 fw-medium">NPM Install List</h3>
                           <nav aria-label="breadcrumb">
                              <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                                 <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                 </li>
                                 <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                 >
                                    npm
                                 </li>
                              </ol>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* NPM All List */}
            <div className="page-section pt-5">
               <div className="container">
                  <div className="row justify-content-center">
                     {/** Self Introduction **/}
                     <div className="col-lg-8">
                        {/** Education **/}
                        <div className="card-page mt-3">
                           <Link
                              to="https://reactjs.org/docs/create-a-new-react-app.html/"
                              target="_blank"
                              className="fg-primary"
                           >
                              Create React App.{" "}
                           </Link>
                           <hr />
                           <div className="row justify-content-center">
                              <div className="col-lg-12 py-1">
                                 <p>
                                    npx create-react-app my-app <br />
                                    cd my-app <br />
                                    npm start <br />
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>

         {/** Footer **/}
         <Footer1></Footer1>
      </div>
   );
};

export default Npm;
