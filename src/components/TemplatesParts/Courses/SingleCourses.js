import React from "react";

const SingleCourses = (props) => {
   const { img, title } = props.course;
   return (
      <div className="col-sm-6 col-lg-3 py-3 wow zoomIn">
         <div className="img-place client-img d-block">
            <img className="mb-3" src={img} alt="" />
            <h5> {title} </h5>
         </div>
      </div>
   );
};

export default SingleCourses;
