import React from "react";

const SingleService = (props) => {
   const { icon, title, description } = props.services;

   console.log(props.services);
   return (
      <div className="col-md-6 col-lg-3 py-3">
         <div className="card card-body border-0 bg-transparent text-center wow zoomIn p-5">
            <div className="mb-3">
               <img src={icon} alt="" />
            </div>
            <p className="fs-large">{title}</p>
            <p className="fs-small fg-grey">{description}</p>
         </div>
      </div>
   );
};

export default SingleService;
