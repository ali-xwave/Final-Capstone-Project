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
        <h1 className="font-family text-center pt-3">Easy Holiday Decorating Under Budget</h1>
        <div class="row">
          {card.map((item) => {
            return (
              <>
                <div class="col-12 col-md-6 col-lg-3">
                  <div className="py-4">
                    <div className="cards">
                      <img src={item.img} alt="" className="img-fluid" />
                      <h5 className="card-heading">{item.heading}</h5>
                      <p className="para-style">{item.para}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="row">
          <div className="col-md-12 ">
            <div className="py-3">
              <div className="image">
                <img src={wayfer} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
