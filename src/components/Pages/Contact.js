import React from "react";
import { Link } from "react-router-dom";

//** import Image */
import heroMini from "../../assets/img/hero_mini.svg";

//** Import Template Parts */
import Navbar2 from "../TemplatesParts/Header2/Navbar2";
import Footer1 from "../TemplatesParts/Footer1/Footer1";
import Gmap from "../TemplatesParts/GoogleMap/Gmap";

const Contact = () => {
   return (
      <div>
         {/** Navbar **/}
         <Navbar2></Navbar2>

         <div class="bg-light">
            <div
               class="page-hero-section bg-image hero-mini"
               style={{ backgroundImage: `url(${heroMini})` }}
            >
               <div class="hero-caption">
                  <div class="container fg-white h-100">
                     <div class="row justify-content-center align-items-center text-center h-100">
                        <div class="col-lg-6">
                           <h3 class="mb-4 fw-medium">Contact</h3>
                           <nav aria-label="breadcrumb">
                              <ol class="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                                 <li class="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                 </li>
                                 <li
                                    class="breadcrumb-item active"
                                    aria-current="page"
                                 >
                                    Contact
                                 </li>
                              </ol>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="page-section">
               <div class="container">
                  <div class="row justify-content-center">
                     <div class="col-lg-10 my-3 wow fadeInUp">
                        <div class="card-page">
                           <div class="row row-beam-md">
                              <div class="col-md-4 text-center py-3 py-md-2">
                                 <i class="mai-location-outline h3"></i>
                                 <p class="fg-primary fw-medium fs-vlarge">
                                    Location
                                 </p>
                                 <p class="mb-0">
                                    46, Nowabganj Road, Lalbagh, Dhaka,
                                    Bangladesh
                                 </p>
                              </div>
                              <div class="col-md-4 text-center py-3 py-md-2">
                                 <i class="mai-call-outline h3"></i>
                                 <p class="fg-primary fw-medium fs-vlarge">
                                    Contact
                                 </p>
                                 <p class="mb-1">+88 01677729892</p>
                                 <p class="mb-0">+88 01916306987</p>
                              </div>
                              <div class="col-md-4 text-center py-3 py-md-2">
                                 <i class="mai-mail-open-outline h3"></i>
                                 <p class="fg-primary fw-medium fs-vlarge">
                                    Email
                                 </p>
                                 <p class="mb-1">lancerabir.com@gmail.com</p>
                                 <p class="mb-0">anjan.o24@gmail.com</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6 col-lg-5 my-3 wow fadeInUp">
                        <div class="card-page">
                           <h3 class="fw-normal">Get in touch</h3>
                           <form method="POST" class="mt-3">
                              <div class="form-group">
                                 <label for="name" class="fw-medium fg-grey">
                                    Fullname
                                 </label>
                                 <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                 />
                              </div>

                              <div class="form-group">
                                 <label for="email" class="fw-medium fg-grey">
                                    Email
                                 </label>
                                 <input
                                    type="text"
                                    class="form-control"
                                    id="email"
                                 />
                              </div>

                              <div class="form-group">
                                 <label for="phone" class="fw-medium fg-grey">
                                    Phone(optional)
                                 </label>
                                 <input
                                    type="number"
                                    class="form-control"
                                    id="phone"
                                 />
                              </div>

                              <div class="form-group">
                                 <label for="message" class="fw-medium fg-grey">
                                    Message
                                 </label>
                                 <textarea
                                    rows="6"
                                    class="form-control"
                                    id="message"
                                 ></textarea>
                              </div>

                              <p>
                                 *Your information will never be shared with any
                                 third party.
                              </p>

                              <div class="form-group mt-4">
                                 <button type="submit" class="btn btn-primary">
                                    Send Message
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div class="col-md-6 col-lg-7 my-3 wow fadeInUp">
                        <div class="card-page">
                           <div class="maps-container">
                              {/** Google Map **/}
                              <Gmap></Gmap>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/** Footer **/}
         <Footer1></Footer1>
      </div>
   );
};

export default Contact;
