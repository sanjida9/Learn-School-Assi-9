import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("courseInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="container">
      {/* services portion */}
      <div className="row">
        <h2 className="text-center p-4 fw-bold text-success">
          <i>Choose the best course for you...</i>
        </h2>
        {services?.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
        <h2 className="text-center text-success p-5">
          <i>Happy Learning!!!</i>
        </h2>
      </div>
    </div>
  );
};

export default Services;
