import React from "react";
import "../assets/Cv.css";
import sholz from "../assets/shola.png";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { TbWorld } from "react-icons/tb";

const CV = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-8 col-md-2 col-lg-2">
            <img src={sholz} className="sholz" alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-7">
            <h1 className="Name">OJO OLUWASOLA</h1>
            <p className="FEd">Front-End Developer (React.JS)</p>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <a className="link1" href="mailto:ojooluwasola7@gmail.com">
                  <div className="d-flex gap-2">
                    <span className="icon">@</span> ojooluwasola7@gmail.com
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <a href="tel:+2348053185250" className="link1">
                  <div className="d-flex gap-2">
                    <span className="icon">
                      <FaPhone />
                    </span>
                    +234 805 318 5250
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <a className="link1">
                  <div className="d-flex gap-2">
                    <span className="icon">
                      <FaLocationDot />
                    </span>
                    Lagos, Nigeria
                  </div>
                </a>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                  <a
                    className="link1"
                    href="https://www.linkedin.com/in/oluwasola-ojo-383b78190"
                  >
                    <div className="d-flex gap-2">
                      <span className="icon">
                        <SiLinkedin />
                      </span>
                      linkedin.com/in/oluwasola-ojo-383b78190
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <a href="https://github.com/Oluwasola1993" className="link1">
                    <div className="d-flex gap-2">
                      <span className="icon">
                        <AiOutlineGithub />
                      </span>
                      github.com/Oluwasola1993
                    </div>
                  </a>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6">
                    <a
                      className="link1"
                      href="https://www.twitter.com/@OLUWASO37625157"
                    >
                      <div className="d-flex gap-2">
                        <span className="icon">
                          <RiTwitterXLine />
                        </span>
                        twitter.com/@OLUWASO37625157
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-lg-4 pt-4 mt-2">
            <div className="col-12 col-md-3 col-lg-3">
              <h1 className="Name2">SKILLS</h1>
              <div className="d-flex gap-2 Skills px-1">
                <p className="sk px-2">HTML 5</p>
                <p className="sk px-2">CSS 3</p>
              </div>
              <div className="d-flex gap-2 Skills px-1">
                <p className="sk px-2">JavaScript (ES6)</p>
                <p className="sk px-2">React.JS</p>
              </div>
              <div className="d-flex gap-2 Skills px-1">
                <p className="sk px-2">Node.JS</p>
                <p className="sk px-2">Express.JS</p>
              </div>
              <div className="d-flex gap-2 Skills px-1">
                <p className="sk px-2">MongoDB</p>
                <p className="sk px-2">Firebase</p>
              </div>
              <div className="d-flex gap-2 Skills px-1">
                <p className="sk px-2">Tailwind CSS</p>
                <p className="sk px-2">Bootstrap</p>
              </div>
              <div className="d-flex gap-2 Skills px-1">
                <p className="sk px-2">Figma</p>
                <p className="sk px-2">SEO</p>
                <p className="sk px-2">Git</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="Name2">About Me</h1>
              <div className="FEd">
                Highly skilled React Developer with 2 years of experience in
                developing and implementing front-end architectures that have
                resulted in significant increases in page load speed and user
                engagement. Proficient in collaborating with back-end teams to
                integrate user-facing elements with server-side logic,
                implementing automated testing platforms, and optimizing
                components for maximum performance.
              </div>
            </div>
            <div className="row px-lg-4 pt-4">
              <div className="col-12 col-md-3 col-lg-3">
                <h1 className="Name2">SOFT SKILLS</h1>
                <div className="Skills px-1">
                  <p className="sk px-2 w-75">Critical Thinking</p>
                  <p className="sk px-2">Teamwork and Collaboration</p>
                  <p className="sk px-2 w-75">Time Management</p>
                  <p className="sk px-2 w-75">Attention to Details</p>
                  <p className="sk px-2 w-75">Continuous Learning</p>
                  <p className="sk px-2">Ethical/Professional Conduct</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 moveUp">
                <h1 className="Name2">PROJECTS</h1>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12">
                    Van-Life Landing Page | (Built a functional clone of the
                    Van-Life landing page using React.JS) <span>|</span>
                    <a
                      target="_blank"
                      href="https://github.com/Oluwasola1993/Van-life"
                      className="proLink"
                    >
                      <div>
                        <AiOutlineGithub className="me-2 icon" />
                        https://github.com/Oluwasola1993/Van-life
                      </div>
                    </a>
                  </div>
                </div>
                <a
                  target="_blank"
                  href="https://van-life-new-pied.vercel.app/"
                  className="proLink"
                >
                  <div>
                    <TbWorld className="me-2 icon" />
                    https://van-life-new-pied.vercel.app/
                  </div>
                </a>
                <div className="d-flex gap-2 pt-2">
                  <FaCalendar className="icon" />
                  <p style={{ fontSize: "13px" }}>
                    HTML, CSS, ReactJs, Bootstrap
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3 col-lg-3">
                <h1 className="Name2">LANGUAGES</h1>
                <div>
                  <p className="fw-bold lin pb-2">
                    Lang 1:
                    <span className="FEd ps-2">
                      English (Professional proficiency)
                    </span>
                  </p>
                  <p className="fw-bold">
                    Lang 2:
                    <span className="FEd ps-2">
                      Yoruba (Native proficiency)
                    </span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-3 col-lg-3">
                  <h1 className="Name2">REFERENCES</h1>
                  <div>
                    <p className="fw-bold">Mr. Ojo Oluwadurotimi</p>
                  </div>
                  <div>
                    <a
                      className="linkNw"
                      href="mailto:seyi.odekomaya@edu.sqi.ng"
                    >
                      <div className="d-flex gap-2 lin pb-3">
                        <span className="icon">
                          <MdMail />
                        </span>
                        seyi.odekomaya@edu.sqi.ng
                      </div>
                    </a>
                  </div>
                  <div>
                    <p className="fw-bold pt-3">Mr. Oluwaseyi Odekomaya</p>
                    <div>
                      <a
                        className="linkNw"
                        href="https://www.linkedin.com/in/zheythetechie"
                      >
                        <div className="d-flex gap-2">
                          <span className="icon">
                            <SiLinkedin />
                          </span>
                          zheythetechie
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        className="linkNw"
                        href="mailto:seyi.odekomaya@edu.sqi.ng"
                      >
                        <div className="d-flex gap-2">
                          <span className="icon">
                            <MdMail />
                          </span>
                          seyi.odekomaya@edu.sqi.ng
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8 col-lg-8">
                  <h1 className="Name2">EDUCATION</h1>
                  <div className="d-flex gap-2">
                    <p className="fw-bold">
                      Software Engineering (Web Development)
                    </p>{" "}
                    <span className="fw-bold FEd">|</span>
                    <p className="fw-bold FEd">
                      Soft Quest Incorporated (SQI) College of ICT, Ogbomosho
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-3">
                      <span className="icon">
                        <FaCalendar />
                      </span>
                      <p>2023-2024</p>
                    </div>
                    <div className="d-flex gap-3">
                      <span className="icon">
                        <FaLocationDot />
                      </span>
                      <p>Oyo, Nigeria</p>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <span className="iC">
                      <GoDotFill />
                    </span>
                    <p>Professional Diploma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CV;
