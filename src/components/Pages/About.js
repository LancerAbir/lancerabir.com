import React, { useState } from "react";
import { Link } from "react-router-dom";

//** Import Image */
import ProfilePhoto from "../../assets/img/banner/profile02.png";
import heroMini from "../../assets/img/hero_mini.svg";
import react from "../../assets/img/clients/react.png";
import redux from "../../assets/img/clients/redux.jpg";
import node from "../../assets/img/clients/node.jpg";
import express from "../../assets/img/clients/express.png";
import mongodb from "../../assets/img/clients/mongodb.jpg";
import html from "../../assets/img/clients/html.png";
import firebase from "../../assets/img/clients/firebase.png";

//** Import Template Parts */
import Footer1 from "../TemplatesParts/Footer1/Footer1";
import Navbar2 from "../TemplatesParts/Header2/Navbar2";
import SingleSkill from "../TemplatesParts/SingleSkill/SingleSkill";

const About = () => {
   const [SkillData] = useState([
      {
         img: react,
      },
      {
         img: redux,
      },
      {
         img: node,
      },
      {
         img: express,
      },
      {
         img: mongodb,
      },
      {
         img: html,
      },
      {
         img: firebase,
      },
   ]);
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
                           <h3 className="mb-4 fw-medium">About Us</h3>
                           <nav aria-label="breadcrumb">
                              <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                                 <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                 </li>
                                 <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                 >
                                    About
                                 </li>
                              </ol>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="page-section pt-5">
               <div className="container">
                  <div className="row justify-content-center">
                     {/** Self Introduction **/}
                     <div className="col-lg-8">
                        <div className="card-page">
                           <h5 className="fg-primary">Introduction</h5>
                           <hr />
                           <p>
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita kasd gubergren, no
                              sea takimata sanctus est
                           </p>
                           <p>
                              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                              amet, consetetur sadipscing elitr, sed diam nonumy
                              eirmod tempor invidunt ut labore et dolore magna
                              aliquyam erat, sed diam voluptua. At vero eos et
                              accusam et justo duo dolores et ea rebum. Stet
                              clita kasd gubergren, no sea takimata sanctus est
                              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                              amet, consetetur sadipscing elitr, sed diam nonumy
                              eirmod tempor
                           </p>

                           {/** <!-- Profile Image --> **/}
                           <div className="text-center py-5">
                              <img
                                 className="profile-image floating-animate"
                                 src={ProfilePhoto}
                                 alt=""
                              />
                           </div>

                           <p>
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita kasd gubergren, no
                              sea takimata sanctus est Lorem ipsum dolor sit
                              amet.
                           </p>
                        </div>

                        {/** Programming Skill **/}
                        <div className="card-page mt-3">
                           <h5 className="fg-primary">Programming Skill</h5>
                           <hr />

                           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center align-items-center mt-5">
                              {SkillData.map((skill) => (
                                 <SingleSkill skill={skill}></SingleSkill>
                              ))}
                           </div>
                        </div>
                        {/** Education **/}
                        <div className="card-page mt-3">
                           <h5 className="fg-primary">Education</h5>
                           <hr />

                           <div className="row justify-content-center">
                              <div className="col-lg-3 py-3"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
         {/** <!-- .bg-light --> **/}

         {/** Footer **/}
         <Footer1></Footer1>
      </div>
   );
};

export default About;
