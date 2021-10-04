import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark footer">
      <div className="text-white text-center">
        <h5 className="pt-3">Follow</h5>
        <h3>
          <i className="fab fa-youtube mx-2"></i>
          <i className="fab fa-facebook mx-2"></i>
          <i className="fab fa-twitter mx-2"></i>
          <i className="fab fa-instagram"></i>
        </h3>
        <p>Support || Review || About Us || Contact Us</p>
      </div>
    </div>
  );
};

export default Footer;
