import React from "react";
import "./HomeService.css";

const HomeService = (props) => {
  const { course, instructor, fee, students, image, level, duration } =
    props.service;
  return (
    <div className="col-md-6 mb-3 container">
      {/*single card portion in Home*/}
      <div className="shadow card-hover card-width">
        <img
          src={image}
          className="mx-auto img-fluid d-block image"
          alt="..."
        />
        <span className="span-bg text-white p-1 ms-3 rounded">
          <i>{level}</i>
        </span>
        <div className="card-body text-center ">
          <h4 className="card-title mt-2 fw-bold">{course}</h4>
          <h5 className="card-title fst-italic">Instructor : {instructor}</h5>
          <h4 className="card-title fw-bold">
            <span className=" px-2 rounded">${fee}</span>
          </h4>
          <h6 className="card-title">
            <i className="fas fa-user-alt"></i> {students} Enrolled
          </h6>
          <h6 className="card-title">Duration : {duration} Week</h6>
        </div>
        <div className="text-center pb-2">
          <button className="btn btn-danger px-3 me-3 mb-2">Free Trial</button>
          <button className="btn btn-success px-3  mb-2">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
