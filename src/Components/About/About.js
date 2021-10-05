import React from "react";
import "./About.css";
import about2 from "../../images/about2.png";
import about3 from "../../images/about3.jpg";

const About = () => {
  return (
    <div className="bg">
      <div className="text-center p-5">
        <h1 className="fw-bold">
          <i>About Us</i>
        </h1>
      </div>

      <div className="container shadow bg-light rounded d-flex align-items-center justify-content-between p-5 mb-5">
        <div>
          <h1>What We Do & Our Aim</h1>
          <p></p>
          <h5>
            <i className="fas fa-hand-point-right"></i> Full lifetime access
          </h5>
          <h5>
            <i className="fas fa-hand-point-right"></i> 20+ downloadable
            resources
          </h5>
          <h5>
            <i className="fas fa-hand-point-right"></i> Certificate of
            completion
          </h5>
          <h5>
            <i className="fas fa-hand-point-right"></i> Free Trial 7 Days
          </h5>
          <div>
            <button className="btn-secondary rounded px-4 py-2 m-1 border-0 fw-bold text-white">
              Enroll Today
            </button>
          </div>
        </div>
        <div>
          <img width="600px" className="img-fluid" src={about2} alt="" />
        </div>
      </div>

      <div className="d-flex container bg-light shadow rounded align-items-center justify-content-md-between p-5 rounded mb-5">
        <div>
          <h3>Become A Instructor?</h3>
          <h1>You can join with us as a instructor...</h1>
        </div>
        <div className="ms-2">
          <button className="btn-secondary rounded px-4 py-2 m-1 border-0 fw-bold text-white">
            Drop Information
          </button>
        </div>
      </div>
      <div className="text-center"></div>

      <div className="d-flex container bg-light shadow rounded align-items-center justify-content-md-between p-5 rounded mb-0">
        <div>
          <img className="img-fluid" src={about3} alt="" />
        </div>
        <div className="ms-2 ps-3">
          <h2>What are the benefits of group work?</h2>
          <h6>
            “More hands make for lighter work.” “Two heads are better than one.”
            “The more the merrier.” These adages speak to the potential groups
            have to be more productive, creative, and motivated than individuals
            on their own.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default About;
