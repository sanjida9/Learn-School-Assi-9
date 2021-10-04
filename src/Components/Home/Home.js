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
    <div className="container mt-5 jus">
      <div className="d-flex">
        <div className="w-50 p-2">
          <h1 className="justify-content-center pt-5 fw-bold text-warning">
            Learn From Anywhere
          </h1>
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
        <div>
          <img className="img-fluid" src={headerImg} alt="" />
        </div>
      </div>
      <div className="">
        <div className="row">
          <h1 className="text-center m-3 text-success fw-bold">Our Services</h1>
          {services.slice(0, 4).map((service) => (
            <HomeService service={service} key={service.id}></HomeService>
          ))}
        </div>
      </div>

      <div className="text-center text-success p-3">
        <h1 className="m-4">Best Support for Us</h1>
        <img className="img-fluid" src={bestSupport} alt="" />
      </div>
    </div>
  );
};

export default Home;
