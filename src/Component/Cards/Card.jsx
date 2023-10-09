import React from "react";
import img1 from "../../assets/cardimg1.jpg";
import img2 from "../../assets/cardimg2.jpg";
import img3 from "../../assets/cardimg3.jpg";
import img4 from "../../assets/cardimg4.jpg";
import wayfer from "../../assets/wayfair.jpg";
const Card = () => {
  const card = [
    {
      img: img1,
      heading: "Outdoor Decore From $50",
    },

    {
      img: img2,
      heading: "Ornaments From $10 ",
      para: "For very branch and budget",
    },

    {
      img: img3,
      heading: "Wreaths & Garlands From $25 ",
      para: "Save. Hang. Admire",
    },

    {
      img: img4,
      heading: "Indore Decore Under From $45 ",
      para: "Instant cheer starts here",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1 className="font-family">Easy Holiday Decorating Under Budget</h1>
        </div>
        <div class="row">
          {card.map((item) => {
            return (
              <>
                <div class="col-12 col-md-6 col-lg-3 cards">
                  <img src={item.img} alt="" className="img-fluid" />
                  <h5 className="fw-bold card-heading">{item.heading}</h5>
                  <p className="para-style">{item.para}</p>
                </div>
              </>
            );
          })}
        </div>

        <div className="row">
          <div className="col-md-12 image">
            <img src={wayfer} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
