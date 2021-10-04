import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="">
      <h1 className="text-center  bg-8 p-5 fw-bold">Top Catagories</h1>
      <div className="mainDiv p-5">
        <div className="d-flex justify-content-md-between align-items-center container bg-1 rounded p-4 shadow">
          <h1 className="me-5">
            <i class="fas fa-pencil-ruler"></i>
          </h1>
          <div className="ms-5">
            <h1> Design </h1>
            <p>
              Learn how to design your website. We have a wide range of
              designing courses from which you can select the best that suits
              you.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-md-between align-items-center container  bg-2 rounded p-4 shadow">
          <h1 className="me-5">
            <i class="fas fa-desktop"></i>
          </h1>
          <div className="ms-5">
            <h1> Development </h1>
            <p>
              Learn how to develop your software and websites. We provide you
              with a wide range of different development courses that will help
              you to learn more.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-md-between align-items-center container  bg-3 rounded p-4 shadow">
          <h1 className="me-5">
            <i class="fab fa-uncharted"></i>
          </h1>
          <div className="ms-5">
            <h1>Software </h1>
            <p>
              If you want to learn something new in IT and Software, then this
              is the right place to help you with different IT and Software
              courses.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-md-between align-items-center container  bg-4 rounded p-4 shadow">
          <h1 className="me-5">
            <i class="fas fa-laptop-code"></i>
          </h1>
          <div className="ms-5">
            <h1> Technology </h1>
            <p>
              There are various technologies which you need to learn if you want
              to stay in the race. Our courses will help you to learn more.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-md-between align-items-center container  bg-5 rounded p-4 shadow">
          <h1 className="me-5">
            <i class="fas fa-camera"></i>
          </h1>
          <div className="ms-5">
            <h1> Photography </h1>
            <p>
              The most successful business today is photography, but you should
              know how to get it on top. Our courses will help you to pull
              yourself up.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-md-between align-items-center container  bg-6 rounded p-4 shadow">
          <h1 className="me-5">
            <i class="fas fa-volume-up"></i>
          </h1>
          <div className="ms-5">
            <h1> Marketting </h1>
            <p>
              In this world, marketing is essential to learn how to do excellent
              marketing with our courses and get your business on top.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-md-between align-items-center container  bg-7 rounded p-4 shadow">
          <h1 className="me-5">
            <i class="far fa-heart"></i>
          </h1>
          <div className="ms-5">
            <h1> Health & Care </h1>
            <p>
              The health and care industry has increased so far. You will need
              to buck yourself up to catch with, and this can be done with our
              courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
