import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/img/blogs/blog_1.jpg";
import blog2 from "../../assets/img/blogs/blog_2.jpg";
import blog3 from "../../assets/img/blogs/blog_3.jpg";
import blog4 from "../../assets/img/blogs/blog_4.jpg";
import blog5 from "../../assets/img/blogs/blog_5.jpg";
import blog6 from "../../assets/img/blogs/blog_6.jpg";
//** import Image */
import heroMini from "../../assets/img/hero_mini.svg";
import Footer1 from "../TemplatesParts/Footer1/Footer1";
//** Import Template Parts */
import Navbar2 from "../TemplatesParts/Header2/Navbar2";

const Blog = () => {
   return (
      <div>
         {/** Navbar **/}
         <Navbar2></Navbar2>

         <main>
            {/** Banner **/}
            <div
               className="page-hero-section bg-image hero-mini"
               style={{ backgroundImage: `url(${heroMini})` }}
            >
               <div className="hero-caption">
                  <div className="container fg-white h-100">
                     <div className="row justify-content-center align-items-center text-center h-100">
                        <div className="col-lg-6">
                           <h3 className="mb-4 fw-medium">Blog</h3>
                           <nav aria-label="breadcrumb">
                              <ol className="breadcrumb breadcrumb-dark justify-content-center bg-transparent">
                                 <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                 </li>
                                 <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                 >
                                    Blog
                                 </li>
                              </ol>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/** Blog **/}
            <div className="page-section">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-8 py-3">
                        {/* Blog 01 */}
                        <article className="blog-entry">
                           <div className="entry-header">
                              <div className="post-thumbnail">
                                 <img src={blog4} alt="" />
                              </div>
                              <div className="post-date">
                                 <h3>20</h3>
                                 <span>Feb</span>
                              </div>
                           </div>
                           <div className="post-title">
                              <Link to="blog-details.html">
                                 Duis feugiat neque sed dolor cursus, sed
                                 lacinia nisl pretium
                              </Link>
                           </div>
                           <div className="entry-meta mb-2">
                              <div className="meta-item entry-author">
                                 <div className="icon">
                                    <span className="mai-person"></span>
                                 </div>
                                 by <Link to="#">Admin</Link>
                              </div>
                              <div className="meta-item">
                                 <div className="icon">
                                    <span className="mai-pricetags"></span>
                                 </div>
                                 Category:
                                 <Link to="#">Business</Link>,
                                 <Link to="#">Finances</Link>
                              </div>
                              <div className="meta-item">
                                 <div className="icon">
                                    <span className="mai-chatbubble-ellipses"></span>
                                 </div>
                                 <Link to="#">24 Comments</Link>
                              </div>
                           </div>
                           <div className="entry-content">
                              <p>
                                 Lorem ipsum dolor sit, amet consectetur
                                 adipisicing elit. Minima quo officia tenetur
                                 hic facere animi doloremque adipisci, fugiat
                                 ratione corrupti eius amet exercitationem
                                 dolorem inventore eum et placeat, sunt ducimus.
                              </p>
                           </div>
                           <Link to="#" className="btn btn-primary">
                              Continue Reading
                           </Link>
                        </article>

                        {/* Blog 02 */}
                        <article className="blog-entry">
                           <div className="entry-header">
                              <div className="post-thumbnail">
                                 <img src={blog5} alt="" />
                              </div>
                              <div className="post-date">
                                 <h3>20</h3>
                                 <span>Feb</span>
                              </div>
                           </div>
                           <div className="post-title">
                              <Link to="blog-details.html">
                                 Duis feugiat neque sed dolor cursus, sed
                                 lacinia nisl pretium
                              </Link>
                           </div>
                           <div className="entry-meta mb-2">
                              <div className="meta-item entry-author">
                                 <div className="icon">
                                    <span className="mai-person"></span>
                                 </div>
                                 by <Link to="#">Admin</Link>
                              </div>
                              <div className="meta-item">
                                 <div className="icon">
                                    <span className="mai-pricetags"></span>
                                 </div>
                                 Category:
                                 <Link to="#">Business</Link>,
                                 <Link to="#">Finances</Link>
                              </div>
                              <div className="meta-item">
                                 <div className="icon">
                                    <span className="mai-chatbubble-ellipses"></span>
                                 </div>
                                 <Link to="#">24 Comments</Link>
                              </div>
                           </div>
                           <div className="entry-content">
                              <p>
                                 Lorem ipsum dolor sit, amet consectetur
                                 adipisicing elit. Minima quo officia tenetur
                                 hic facere animi doloremque adipisci, fugiat
                                 ratione corrupti eius amet exercitationem
                                 dolorem inventore eum et placeat, sunt ducimus.
                              </p>
                           </div>
                           <Link to="#" className="btn btn-primary">
                              Continue Reading
                           </Link>
                        </article>

                        {/* Blog 03 */}
                        <article className="blog-entry">
                           <div className="entry-header">
                              <div className="post-thumbnail">
                                 <img src={blog6} alt="" />
                              </div>
                              <div className="post-date">
                                 <h3>06</h3>
                                 <span>Jan</span>
                              </div>
                           </div>
                           <div className="post-title">
                              <Link to="blog-details.html">
                                 Duis feugiat neque sed dolor cursus, sed
                                 lacinia nisl pretium
                              </Link>
                           </div>
                           <div className="entry-meta mb-2">
                              <div className="meta-item entry-author">
                                 <div className="icon">
                                    <span className="mai-person"></span>
                                 </div>
                                 by <Link to="#">Admin</Link>
                              </div>
                              <div className="meta-item">
                                 <div className="icon">
                                    <span className="mai-pricetags"></span>
                                 </div>
                                 Category:
                                 <Link to="#">Business</Link>,
                                 <Link to="#">Finances</Link>
                              </div>
                              <div className="meta-item">
                                 <div className="icon">
                                    <span className="mai-chatbubble-ellipses"></span>
                                 </div>
                                 <Link to="#">0 Comments</Link>
                              </div>
                           </div>
                           <div className="entry-content">
                              <p>
                                 Lorem ipsum dolor sit, amet consectetur
                                 adipisicing elit. Minima quo officia tenetur
                                 hic facere animi doloremque adipisci, fugiat
                                 ratione corrupti eius amet exercitationem
                                 dolorem inventore eum et placeat, sunt ducimus.
                              </p>
                           </div>
                           <Link to="#" className="btn btn-primary">
                              Continue Reading
                           </Link>
                        </article>
                     </div>
                     {/** <!-- Sidebar --> **/}
                     <div className="col-lg-4 py-3">
                        <div className="widget-wrap">
                           <form action="#" className="search-form">
                              <h3 className="widget-title">Search</h3>
                              <div className="form-group">
                                 <span className="icon mai-search"></span>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a keyword and hit enter"
                                 />
                              </div>
                           </form>
                        </div>

                        <div className="widget-wrap">
                           <h3 className="widget-title">Jobs</h3>
                           <ul className="categories">
                              <li>
                                 <Link to="#">
                                    Graphic Designer <span>12</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="#">
                                    Visual Assistant <span>22</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="#">
                                    Programing <span>37</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="#">
                                    Office Admin <span>42</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="#">
                                    Web Designer <span>14</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="#">
                                    Language <span>140</span>
                                 </Link>
                              </li>
                           </ul>
                        </div>

                        <div className="widget-wrap">
                           <h3 className="widget-title">Recent Blog</h3>
                           <div className="blog-widget">
                              <div className="blog-img">
                                 <img src={blog1} alt="" />
                              </div>
                              <div className="entry-footer">
                                 <div className="blog-title mb-2">
                                    <Link to="#">
                                       Duis feugiat neque sed dolor cursus, sed
                                       lacinia nisl pretium
                                    </Link>
                                 </div>
                                 <div className="meta">
                                    <Link to="#">
                                       <span className="icon-calendar"></span>{" "}
                                       July 12, 2018
                                    </Link>
                                    <Link to="#">
                                       <span className="icon-person"></span>{" "}
                                       Admin
                                    </Link>
                                    <Link to="#">
                                       <span className="icon-chat"></span> 19
                                    </Link>
                                 </div>
                              </div>
                           </div>
                           <div className="blog-widget">
                              <div className="blog-img">
                                 <img src={blog2} alt="" />
                              </div>
                              <div className="entry-footer">
                                 <div className="blog-title mb-2">
                                    <Link to="#">
                                       Duis feugiat neque sed dolor cursus, sed
                                       lacinia nisl pretium
                                    </Link>
                                 </div>
                                 <div className="meta">
                                    <Link to="#">
                                       <span className="icon-calendar"></span>{" "}
                                       July 12, 2018
                                    </Link>
                                    <Link to="#">
                                       <span className="icon-person"></span>{" "}
                                       Admin
                                    </Link>
                                    <Link to="#">
                                       <span className="icon-chat"></span> 19
                                    </Link>
                                 </div>
                              </div>
                           </div>
                           <div className="blog-widget">
                              <div className="blog-img">
                                 <img src={blog3} alt="" />
                              </div>
                              <div className="entry-footer">
                                 <div className="blog-title mb-2">
                                    <Link to="#">
                                       Duis feugiat neque sed dolor cursus, sed
                                       lacinia nisl pretium
                                    </Link>
                                 </div>
                                 <div className="meta">
                                    <Link to="#">
                                       <span className="icon-calendar"></span>{" "}
                                       July 12, 2018
                                    </Link>
                                    <Link to="#">
                                       <span className="icon-person"></span>{" "}
                                       Admin
                                    </Link>
                                    <Link to="#">
                                       <span className="icon-chat"></span> 19
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="widget-wrap">
                           <h3 className="widget-title">Tag Cloud</h3>
                           <div className="tag-clouds">
                              <Link to="#" className="tag-cloud-link">
                                 dish
                              </Link>
                              <Link to="#" className="tag-cloud-link">
                                 menu
                              </Link>
                              <Link to="#" className="tag-cloud-link">
                                 food
                              </Link>
                              <Link to="#" className="tag-cloud-link">
                                 sweet
                              </Link>
                              <Link to="#" className="tag-cloud-link">
                                 tasty
                              </Link>
                              <Link to="#" className="tag-cloud-link">
                                 delicious
                              </Link>
                              <Link to="#" className="tag-cloud-link">
                                 desserts
                              </Link>
                              <Link to="#" className="tag-cloud-link">
                                 drinks
                              </Link>
                           </div>
                        </div>

                        <div className="widget-wrap">
                           <h3 className="widget-title">Paragraph</h3>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Ducimus itaque, autem
                              necessitatibus voluptate quod mollitia delectus
                              aut, sunt placeat nam vero culpa sapiente
                              consectetur similique, inventore eos fugit
                              cupiditate numquam!
                           </p>
                        </div>
                     </div>
                     {/* <!-- end sidebar --> */}
                  </div>
               </div>
            </div>
         </main>

         {/** Footer **/}
         <Footer1></Footer1>
      </div>
   );
};

export default Blog;
