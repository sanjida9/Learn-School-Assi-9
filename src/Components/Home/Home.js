import React, { useEffect, useState } from "react";
import "./Home.css";
import headerImg from "../../images/header-bg.png";
import HomeService from "../HomeService/HomeService";
import bestSupport from "../../images/best-support.jpg";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("courseInfo.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mt-5 ">
      {/* Header part in Home*/}
      <div className="row">
        <div className="w-50 col-md-6">
          <h1 className=" pt-5 fw-bold text-warning">Learn From Anywhere</h1>
          <p className="text-success">
            Technology is bringing a massive wave of evolution on learning
            things on different ways.Technology refers to methods, systems, and
            devices which are the result of scientific knowledge being used for
            practical purposes.
          </p>
          <button className="btn-warning px-3 py-2 m-2 text-white fw-bold border-0">
            Get Started
          </button>
          <button className="btn-success px-3 py-2 m-2 fw-bold border-0">
            View Course
          </button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={headerImg} alt="" />
        </div>
      </div>
      <div>
        {/* Services card portion in Home */}

        <div className="row container mx-0">
          <h1 className="text-center my-5 text-success fw-bold container">
            <i>Our Services</i>
          </h1>
          {services.slice(0, 4).map((service) => (
            <HomeService service={service} key={service.id}></HomeService>
          ))}
        </div>
      </div>
      {/* learning school in number */}
      <h2 className="text-center p-5 text-success fw-bold">
        <i>Learning School in Number</i>
      </h2>
      <div className="row ms-5">
        <div
          className="card border-success mb-3 col-md-4 m-4 text-center p-3 text-success"
          style={{ maxWidth: "18rem" }}
        >
          <div>
            <h1>
              <i className="fas fa-user"></i>
            </h1>
          </div>
          <div className="card-body">
            <h1 className="card-title">10,000</h1>
            <h6 className="card-text">STUDENTS</h6>
          </div>
        </div>

        <div
          className="card border-success mb-3 col-md-4 m-4 text-center p-3 text-success"
          style={{ maxWidth: "18rem" }}
        >
          <div>
            <h1>
              <i className="fas fa-chalkboard-teacher"></i>
            </h1>
          </div>
          <div className="card-body">
            <h1 className="card-title">50</h1>
            <h6 className="card-text">TEACHERS</h6>
          </div>
        </div>

        <div
          className="card border-success mb-3 col-md-4 m-4 text-center p-3 text-success"
          style={{ maxWidth: "18rem" }}
        >
          <div>
            <h1>
              <i className="fas fa-calendar-alt"></i>
            </h1>
          </div>
          <div className="card-body">
            <h1 className="card-title">12</h1>
            <h6 className="card-text">BRANCHES</h6>
          </div>
        </div>
      </div>

      {/* Lower section in Home */}

      <div className="text-center text-success p-3">
        <h1 className="m-5 text-success">
          <i>Best Support for Us</i>
        </h1>
        <img className="img-fluid" src={bestSupport} alt="" />
      </div>
    </div>
  );
};

export default Home;
