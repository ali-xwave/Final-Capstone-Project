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
        <div className="text-center">
          <h2 className="font-family">Top Finds From Brands You'll Love</h2>
        </div>
        <div className="row pt-3 pb-5">
          {data.map((item) => {
            return (
              <>
                <div className="col-md-6">
                  <div>
                    <img src={item.img} alt="" className="img-fluid" />
                    <div className="py-2 text-center">
                      <h4>{item.text}</h4>
                      <p className="para-style">{item.paratxt}</p>
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
