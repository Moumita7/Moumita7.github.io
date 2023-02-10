import React from "react";
import "../style/project.css";
import img1 from "../images/proj1.jpeg";
import myglm from "../images/myglm.jpeg";
import fitness from "../images/fitness.jpeg";

const Projects = () => {
  return (
    <div className="projects" id="projectID">
      <h1 className="pro" fontWeight={"medium"} fontSize="3xl">
        Projects
      </h1>
      {/* <ProjectCard/> */}
      <div className="cc">
        <div>
          <div className="container">
            <div>
              <img src={img1} alt="jh" />
              <h2>Apni dukaan</h2>
              <div className="logos">
                <div>
                  <img
                    className="logo_img"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt=""
                  />
                  <img
                    className="logo_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt=""
                  />
                  <img
                    className="logo_img"
                    src="https://user-images.githubusercontent.com/97180521/216631914-983dc3d9-7758-478f-a1dd-1dd50bcc8202.png"
                    alt=""
                  />

                  <img
                    className="logo_img"
                    src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"
                    alt=""
                  />
                </div>
              </div>
              <p>
                Apni dukaan is an e-commerce website. where you can purchase
                clothing stuff.
              </p>
              <p>useing React,redux,redux-thunk,chakraUi,css,Firebase</p>
              <div className="p_btn">
                <button className="btn">
                  <a
                    a
                    className="aa"
                    style={{ textDecoration: "none" }}
                    href="https://apnidukaan-9a863.web.app/"
                  >
                    Check it Out!
                  </a>
                </button>
                <button className="btn">
                  <a
                    className="aa"
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Vishwa9011/moaning-act-434"
                  >
                    Github Link
                  </a>
                </button>
              </div>
            </div>

            <div>
              <img src={myglm} alt="jh" />
              <h2>ZEE-5</h2>
              <div className="logos">
                <div>
                  <img
                    className="logo_img"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt=""
                  />
                  <img
                    className="logo_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt=""
                  />
                  <img
                    className="logo_img"
                    src="https://user-images.githubusercontent.com/97180521/216631914-983dc3d9-7758-478f-a1dd-1dd50bcc8202.png"
                    alt=""
                  />

                  <img
                    className="logo_img"
                    src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"
                    alt=""
                  />
                </div>
              </div>
              <p>
                ZEE-5 is a subscription-based streaming service that allows our
                members to watch TV shows, movies, web-series and News on an
                internet-connected device.
              </p>
              <p>useing React,redux,css,chakraUi,Firebase</p>
              <div className="p_btn">
                <button className="btn">
                  <a
                    a
                    className="aa"
                    style={{ textDecoration: "none" }}
                    href="https://incredible-basbousa-aecbd0.netlify.app/"
                  >
                    Check it Out!
                  </a>
                </button>
                <button className="btn">
                  <a
                    className="aa"
                    style={{ textDecoration: "none" }}
                    href="https://github.com/Moumita7/foamy-language-9425"
                  >
                    Github Link
                  </a>
                </button>
              </div>
            </div>
            {/* 3rd */}

            <div>
              <img src={fitness} alt="jh" />
              <h2>fitness</h2>
              <div className="logos">
                <div>
                  <img
                    className="logo_img"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt=""
                  />
                  <img
                    className="logo_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt=""
                  />
                  <img
                    className="logo_img"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt=""
                  />
                </div>
              </div>
              <p>
                This is a clone of MyFitnessPal, a smartphone app and website
                that tracks diet and exercise. Features: carousel; optimized
                code using javascript; login and signup functionality; diet
                calculator
              </p>
              <p>Useing Html,css,javascript</p>
              <div className="p_btn">
                <button className="btn">
                  <a
                    a
                    className="aa"
                    style={{ textDecoration: "none" }}
                    href="https://calm-kataifi-ed53c8.netlify.app/"
                  >
                    Check it Out!
                  </a>
                </button>
                <button className="btn">
                  <a
                    className="aa"
                    style={{ textDecoration: "none" }}
                    href="https://github.com/sgrprmnk/paltry-rain-9292"
                  >
                    Github Link
                  </a>
                </button>
              </div>
            </div>

            {/* 4th */}

            <div>
              <img src={myglm} alt="jh" />
              <h2>MyGlam</h2>
              <div className="logos">
                <div>
                  <img
                    className="logo_img"
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt=""
                  />
                  <img
                    className="logo_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt=""
                  />
                  <img
                    className="logo_img"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt=""
                  />
                </div>
              </div>
              <p>
                MyGlamm, the Indian e-commerce company that sells cosmetics and
                personal care products. The project was done in collaboration.
              </p>
              <p>Useing Html,css,javascript</p>
              <div className="p_btn">
                <button className="btn">
                  <a
                    a
                    className="aa"
                    style={{ textDecoration: "none" }}
                    href="incredible-basbousa-aecbd0.netlify.app/"
                  >
                    Check it Out!
                  </a>
                </button>
                <button className="btn">
                  <a
                    className="aa"
                    style={{ textDecoration: "none" }}
                    href="https://github.com/guptaneha0111/MyGlamm-clone"
                  >
                    Github Link
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
