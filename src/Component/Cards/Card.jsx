import React from "react";
import img1 from "../../assets/cardimg1.jpg";
import img2 from "../../assets/cardimg2.jpg";
import img3 from "../../assets/cardimg3.jpg";
import img4 from "../../assets/cardimg4.jpg";
import "./card.css";
const Card = () => {
  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <h1>Easy Holiday Decorating Under Budget</h1>
        </div>

        <div class="main pt-5">
          <div class="col">
            <img src={img1} alt="" className="img-fluid" />
            <h5 className="fw-bold">Outdoor Decore From $50 </h5>
            <span>Make a merry impression</span>
            <span></span>
          </div>
          <div class="col">
            <img src={img2} alt="" />
            <h5 className="fw-bold">Ornaments From $10 </h5>
            <span>For very branch and budget</span>
            <span></span>
          </div>
          <div class="col">
            <img src={img3} alt="" />
            <h5 className="fw-bold">Wreaths & Garlands From $25 </h5>
            <span>Save. Hang. Admire</span>
            <span></span>
          </div>
          <div class="col">
            <img src={img4} alt="" />
            <h5 className="fw-bold">Indore Decore Under From $45 </h5>
            <span>Instant cheer starts here</span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
