import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="">
      <h1 className="text-center  bg-8 p-5 fw-bold">
        <i>Top Catagories</i>
      </h1>
      <div className="container">
        <div className="main row ms-5 p-5">
          <div
            className=" text-white bg-1 mb-3 col-md-4 p-2 m-2"
            style={{ maxWidth: "18rem" }}
          >
            <div className="text-center text-dark fw-bold">
              <h2>
                <i className="fas fa-pencil-ruler"></i>
              </h2>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title text-dark">Design</h5>
              <p className="card-text text-dark">
                Learn how to design your website. We have a wide range of
                designing courses from which you can select the best that suits
                you.
              </p>
            </div>
          </div>
          <div
            className=" text-white bg-2 mb-3 col-md-4 p-2 m-2"
            style={{ maxWidth: "18rem" }}
          >
            <div className="text-center text-dark fw-bold">
              <h2>
                <i className="fas fa-desktop"></i>
              </h2>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title text-dark">Development </h5>
              <p className="card-text text-dark">
                Learn how to develop your software and websites. We provide you
                with a wide range of different development courses that will
                help you to learn more.
              </p>
            </div>
          </div>
          <div
            className=" text-white bg-3 mb-3 col-md-4 p-2 m-2"
            style={{ maxWidth: "18rem" }}
          >
            <div className="text-center text-dark fw-bold">
              <h2>
                <i className="fab fa-uncharted"></i>
              </h2>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title text-dark">Software</h5>
              <p className="card-text text-dark">
                If you want to learn something new in IT and Software, then this
                is the right place to help you with different IT and Software
                courses.
              </p>
            </div>
          </div>
          <div
            className=" text-white bg-4 mb-3 col-md-4 p-2 m-2"
            style={{ maxWidth: "18rem" }}
          >
            <div className="text-center text-dark fw-bold">
              <h2>
                <i className="fas fa-laptop-code"></i>
              </h2>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title text-dark">Technology</h5>
              <p className="card-text text-dark">
                There are various technologies which you need to learn if you
                want to stay in the race. Our courses will help you to learn
                more.
              </p>
            </div>
          </div>
          <div
            className=" text-white bg-5 mb-3 col-md-4 p-2 m-2"
            style={{ maxWidth: "18rem" }}
          >
            <div className="text-center text-dark fw-bold">
              <h2>
                {" "}
                <i className="fas fa-camera"></i>
              </h2>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title text-dark">Photography </h5>
              <p className="card-text text-dark">
                The most successful business today is photography, but you
                should know how to get it on top. Our courses will help you to
                pull yourself up.
              </p>
            </div>
          </div>
          <div
            className=" text-white bg-6 mb-3 col-md-4 p-2 m-2"
            style={{ maxWidth: "18rem" }}
          >
            <div className="text-center text-dark fw-bold">
              <h2>
                {" "}
                <i className="fas fa-volume-up"></i>
              </h2>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title text-dark">Marketting</h5>
              <p className="card-text text-dark">
                In this world, marketing is essential to learn how to do
                excellent marketing with our courses and get your business on
                top.
              </p>
            </div>
          </div>
          <div
            className=" text-white bg-7 mb-3 col-md-4 p-2 m-2"
            style={{ maxWidth: "18rem" }}
          >
            <div className="text-center text-dark fw-bold">
              <h2>
                {" "}
                <i className="far fa-heart"></i>
              </h2>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title text-dark">Health & Care </h5>
              <p className="card-text text-dark">
                The health and care industry has increased so far. You will need
                to buck yourself up to catch with, and this can be done with our
                courses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
