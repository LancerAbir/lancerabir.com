import React from "react";

//** import Template Parts */
import Navbar from "../TemplatesParts/Header/Navbar";
import Header from "../TemplatesParts/Header/Header";
import Courses from "../TemplatesParts/Courses/Courses";
import Service from "../TemplatesParts/Service/Service";
import HomeContact from "../TemplatesParts/HomeContact/HomeContact";
import Footer1 from "../TemplatesParts/Footer1/Footer1";
import ResentProjects from "../TemplatesParts/ResentProjects/ResentProjects";
import ViewSingleProject from "../TemplatesParts/Projects/ViewSingleProject";

const Home1 = () => {
   return (
      <div>
         {/** Navbar **/}
         <Navbar></Navbar>

         {/** Header **/}
         <Header></Header>

         {/** Resent Projects **/}
         <ResentProjects></ResentProjects>

         {/** Courses **/}
         <Courses></Courses>

         {/** Single View Project **/}
         {/*  <ViewSingleProject></ViewSingleProject>   */}

         {/** Service **/}
         <Service></Service>

         {/** Home Contact Us **/}
         <HomeContact></HomeContact>

         {/** Footer **/}
         <Footer1></Footer1>
      </div>
   );
};

export default Home1;
