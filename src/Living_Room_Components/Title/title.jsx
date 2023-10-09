import React from "react";
import "./title.css";
import Arrow from "../../assets/Arrow.svg";
import { Outlet } from "react-router-dom";
const Title = () => {
  return (
    <div className="title-bg">
      <div className="container">
            <div className="pt-2 text-white d-flex justify-content-between">
              <div className="txt-center title-size">
              <span>Big-Time Deals on Furniture & Decor | Shop now</span>
              <img src={Arrow} alt="arrow" />
              </div>
              <p className="text-display title-size">Our App | Wayfair Professional | Free Shipping Over $35*</p>
            </div>
        </div>
        <Outlet />
      </div>
  );
};

export default Title;
