import React from "react";

const SingleSkill = (props) => {
   const { img } = props.skill;
   return (
      <div className="p-3">
         <div className="img-place client-img">
            <img src={img} alt="" />
         </div>
      </div>
   );
};

export default SingleSkill;
