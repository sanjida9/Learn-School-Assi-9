import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark footer ">
      <div className="text-white text-center ">
        <h5 className="pt-3 orange">Follow</h5>
        <h3 className="orange">
          <i className="fab fa-youtube mx-2"></i>
          <i className="fab fa-facebook mx-2"></i>
          <i className="fab fa-twitter mx-2"></i>
          <i className="fab fa-instagram"></i>
        </h3>
        <h6 className="orange">Support || Review || About Us || Contact Us</h6>
        <p className="orange">
          copyright &copy; 2021{" "}
          <span>
            <b>Learning School</b>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
