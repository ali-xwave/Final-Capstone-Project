import React from "react";
import "./image.css";
import exclusive from "../../assets/perksimg.webp";
const Image = () => {
  return (
    <div className="container-fluid">
        <div className="row pb-5">
          <div className="col-md-12 image">
            <img src={exclusive} alt="" className="img-fluid" />
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="para-style">
                <p className="d-flex justify-content-end pt-5">Be the first to know about our best deals!</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pt-5 p">
                <span><input className="px-2 w-50 para-style border py-2 rounded" type="text" placeholder="Email Address" /></span>
                <span><button className="para-style border-0 py-2 px-3 rounded bg text-white">Submit</button></span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Image;