import React, { useState } from "react";

//** Import Template Parts */
import SingleProject from "./SingleProject";

//** import Image */
import pattern from "../../../assets/img/pattern_1.svg";
import ProjectPhoto from "../../../assets/img/bg_testimonials.jpg";
import creativeAgency from "../../../assets/img/project/project-01.jpg";
import volunteerNetwork from "../../../assets/img/project/project-02.jpg";
import travelGuru from "../../../assets/img/project/project-03.jpg";

const ResentProjects = () => {
   //** Project Data */
   const [ProjectData] = useState([
      {
         img: creativeAgency,
         title: "Creative Agency",
         technology: "React JS + Node JS",
      },
      {
         img: volunteerNetwork,
         title: "Volunteer Network",
         technology: "React JS + Node JS",
      },
      {
         img: travelGuru,
         title: "Travel Guru",
         technology: "React JS",
      },
   ]);
   return (
      <div
         className="position-realive bg-image"
         style={{ backgroundImage: `url(${pattern})` }}
      >
         <div className="page-section">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12 text-center mb-5">
                     <h1> Resents Projects </h1>
                  </div>
               </div>

               {/* Resents Projects */}
               <div className="row">
                  {ProjectData.map((project) => (
                     <SingleProject project={project}></SingleProject>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ResentProjects;
