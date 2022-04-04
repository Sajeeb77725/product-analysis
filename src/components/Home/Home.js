import React from "react";
import ReviewAtHome from "../ReviewAtHome/ReviewAtHome";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="laptop-review">
          <h1>Choose your next laptop</h1>
          <h1 style={{ color: "blue" }}>Choose your best laptop</h1>
          <p>
            The HP Spectre x360 (2020) is an excellent option for anyone in the
            market for a solid notebook. Even in the shadow of its successor,
            the HP Spectre x360 (2021), it can hold its own, rocking double the
            RAM of prior models alongside Iris Plus integrated graphics and the
            Intel Core i7-1065G7 CPU.
          </p>
          <button>Live Demo</button>
        </div>
        <div className="laptop-img">
          <img
            src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge_wm_brb/public/field/image/2021/01/hp-spectre-x360-14-hero3.jpg"
            alt=""
          />
        </div>
      </div>
      <ReviewAtHome></ReviewAtHome>
    </div>
  );
};

export default Home;
