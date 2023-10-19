import React from "react";
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
      <div className="container">
          <h1 className="font-family text-center pt-4">Shop All Clearance Deals</h1>
        <div className="row">
          {img.map((item) => {
            return (
              <>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="image">
                    <img src={item.image} alt="" className="img-fluid py-4" />
                  </div>
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
