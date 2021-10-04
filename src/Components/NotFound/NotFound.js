import React from "react";
import "./NotFound.css";
import error from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div className="bg-dark">
      <div className="text-center pt-3">
        <img className="img-fluid" src={error} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
