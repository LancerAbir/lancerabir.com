import React from "react";
import { Link } from "react-router-dom";

const SingleProject = (props) => {
   const { img, title, technology } = props.project;
   return (
      <div className="col-md-4 col-sm-6 col-12">
         <div className="card-deck mb-5">
            <div className="card">
               <img src={img} className="card-img-top" alt="" />
               <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                  <p className="card-text">{technology}</p>
                  <div className="d-flex justify-content-between">
                     <Link className="btn btn-primary rounded-pill">
                        Live View
                     </Link>
                     <Link className="btn btn-dark rounded-pill">Details</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleProject;
