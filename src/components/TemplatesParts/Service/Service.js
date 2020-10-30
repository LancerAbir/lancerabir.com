import React, { useState } from "react";
//** Import Image */
import rocket from "../../../assets/img/icons/rocket.svg";
import testimony from "../../../assets/img/icons/testimony.svg";
import promotion from "../../../assets/img/icons/promotion.svg";
import coins from "../../../assets/img/icons/coins.svg";
import support from "../../../assets/img/icons/support.svg";
import laptop from "../../../assets/img/icons/laptop.svg";
//** Import Single Service */
import SingleService from "./SingleService";

const Service = () => {
   //** Service Data */
   const [serviceData] = useState([
      {
         icon: rocket,
         title: "Very Fast",
         description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      },
      {
         icon: testimony,
         title: "Happy Client",
         description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      },
      {
         icon: promotion,
         title: "Quality Web App",
         description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      },
      {
         icon: coins,
         title: "Standard Budget",
         description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      },
      {
         icon: support,
         title: "24/7 Support",
         description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      },
      {
         icon: laptop,
         title: "Full Features",
         description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      },
   ]);

   return (
      <div className="page-section bg-dark fg-white">
         <div className="container">
            <h1 className="text-center">My Service</h1>
            <div className="row justify-content-center mt-5">
               {serviceData.map((services) => (
                  <SingleService services={services}></SingleService>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Service;
