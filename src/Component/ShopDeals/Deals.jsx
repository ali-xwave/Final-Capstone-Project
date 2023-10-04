import React from "react";
import "./Deals.css";
import per60 from "../../assets/Percent-60.jpg";
import per601 from "../../assets/hero-60.jpg";
import per551 from "../../assets/ShopImg2.jpg";
import per552 from "../../assets/shop-55.jpg";
const Deals = () => {
  const img = [
    {
      image: per60,
    },
    {
      image: per601,
    },
    {
      image: per551,
    },
    {
      image: per552,
    },
  ];
  return (
    <>
      <div className="container pb-5">
        <div className="text-center py-4">
          <h1 className="font-family">Shop All Clearance Deals</h1>
        </div>

        <div class="inner">
          {img.map((item) => {
            return(
              <>
              <div className="colss">
                  <img src={item.image} alt="" />
              </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Deals;
