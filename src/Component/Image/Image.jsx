import React from "react";
import "./image.css";
import exclusive from "../../assets/perksimg.webp";
const Image = () => {
  return (
    <div className="container-fluid">
        <div className="row pb-5">
          <div className="col-md-12">
            <img src={exclusive} alt="" className="img-fluid" />
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="para-style">
                <p className="txt">Be the first to know about our best deals!</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pt-5 input-style">
                <span><input type="text" placeholder="Email Address" /></span>
                <span><button className="para-style">Submit</button></span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Image;