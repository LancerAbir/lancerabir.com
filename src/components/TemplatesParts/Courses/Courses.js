import React, { useState } from "react";
//** Import Image */
import alterSport from "../../../assets/img/clients/alter_sport.png";
import cleaningService from "../../../assets/img/clients/cleaning_service.png";
import creativePhoto from "../../../assets/img/clients/creative_photo.png";
import globalTv from "../../../assets/img/clients/global_tv.png";
//** Import Single Course */
import SingleCourses from "./SingleCourses";

const Courses = () => {
   //** Course Data */
   const [courseData] = useState([
      { img: alterSport, title: "Programming Hero" },
      { img: cleaningService, title: "Stack Learner" },
      { img: creativePhoto, title: "Traversy Media" },
      { img: globalTv, title: "RRF" },
   ]);

   return (
      <div className="page-section mt-5">
         <div className="container">
            <div className="row">
               <div className="col-sm-12 text-center mb-5">
                  <h1> Top Courses </h1>
               </div>
            </div>
            <div className="row">
               {courseData.map((course) => (
                  <SingleCourses course={course}></SingleCourses>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Courses;
