import React from "react";
import "./Deals.css";
import per60 from "../../assets/Percent-60.jpg";
import per601 from "../../assets/hero-60.jpg";
import per551 from "../../assets/ShopImg2.jpg";
import per552 from "../../assets/shop-55.jpg";
const Deals = () => {
  return (
    <>
      <div className="container">
        <div className="text-center py-4">
          <h1>Shop All Clearance Deals</h1>
        </div>

        <div class="inner">
          <div class="col">
            <img src={per60} alt="" />
          </div>
          <div class="col">
            <img src={per601} alt="" />
          </div>
          <div class="col">
            <img src={per551} alt="" />
          </div>
          <div class="col">
            <img src={per552} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
