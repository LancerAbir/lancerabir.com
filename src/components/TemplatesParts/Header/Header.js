import React from "react";
import { Link } from "react-router-dom";

//** Import Image */
import bg_hero_1 from "../../../assets/img/bg_hero_1.svg";
import profileImage from "../../../assets/img/banner/profile01.png";

const Header = () => {
   return (
      <div
         className="page-hero-section bg-image hero-home-1"
         style={{
            backgroundImage: `url(${bg_hero_1})`,
         }}
      >
         <div className="hero-caption pt-5">
            <div className="container h-100">
               <div className="row align-items-center h-100">
                  <div className="col-lg-6 wow fadeInUp mt-8">
                     <div className="badge mb-2">
                        <span className="icon mr-1">
                           <span className="mai-globe"></span>
                        </span>
                        # Full Stack MERN Developer.
                     </div>
                     <h1 className="mb-4">
                        Hello, I am <br /> Abir Kumar Dhar <br />{" "}
                        <small>˚∆˚Lancer Abir ˚∆˚ </small>
                     </h1>
                     <p className="mb-4">
                        Looking Forward to Learning Something New
                     </p>
                     <Link to="#" className="btn btn-primary rounded-pill mb-6">
                        Hire Me
                     </Link>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block wow zoomIn">
                     <div className="img-place mobile-preview shadow floating-animate">
                        <img src={profileImage} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
