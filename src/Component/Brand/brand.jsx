import React from "react";
import dyimg from "../../assets/dysonimg.jpg";
import Moeimg from "../../assets/Moenimg.jpg";
const Brand = () => {
  const data = [
    {
      img: dyimg,
      text: "Just in: Dyson V11 Cordless Vacuum",
      paratxt: "Get ready for whole-home deep cleaning.",
    },

    {
      img: Moeimg,
      text: "Take Pride in the Details",
      paratxt: "Save on high-quality faucets and fixtures.",
    },
  ];
  return (
    <div>
      <div className="container">
        <h2 className="font-family text-center py-4">Top Finds From Brands You'll Love</h2>
        <div className="row">
          {data.map((item) => {
            return (
              <>
                <div className="col-md-6">
                  <div className="py-3">
                    <div className="cards">
                      <img src={item.img} alt="" className="img-fluid" />
                      <div className="py-2 text-center">
                        <h4>{item.text}</h4>
                        <p className="para-style">{item.paratxt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brand;
