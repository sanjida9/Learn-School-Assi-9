import React from "react";
import "./About.css";
import about from "../../images/about-us.jpg";
import about2 from "../../images/about2.png";
import about3 from "../../images/about3.jpg";

const About = () => {
  return (
    <div>
      <div className="text-center">
        <img className="img-fluid p-5" width="500px" src={about} alt="" />
      </div>

      <div className="container bg d-flex align-items-center justify-content-between p-5 mb-5">
        <div>
          <h1>What We Do & Our Aim</h1>
          <p></p>
          <h4>
            <i class="fas fa-hand-point-right"></i> Full lifetime access
          </h4>
          <h4>
            <i class="fas fa-hand-point-right"></i> 20+ downloadable resources
          </h4>
          <h4>
            <i class="fas fa-hand-point-right"></i> Certificate of completion
          </h4>
          <h4>
            <i class="fas fa-hand-point-right"></i> Free Trial 7 Days
          </h4>
          <div>
            <button className="btn-secondary px-4 py-2 m-1 border-0 fw-bold text-white">
              Enroll Today
            </button>
          </div>
        </div>
        <div>
          <img width="600px" className="img-fluid" src={about2} alt="" />
        </div>
      </div>

      <div className="d-flex container bg align-items-center justify-content-md-between p-5 rounded mb-3">
        <div>
          <h3>Become A Instructor?</h3>
          <h1>You can join with us as a instructor</h1>
        </div>
        <div className="ms-2">
          <button className="btn-secondary px-4 py-2 m-1 border-0 fw-bold text-white">
            Drop Information
          </button>
        </div>
      </div>
      <div className="text-center">
        <img width="400px" className="img-fluid" src={about3} alt="" />
      </div>
    </div>
  );
};

export default About;
