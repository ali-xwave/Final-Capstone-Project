import React from "react";
import img1 from "../../assets/kelyimg.jpg";
import img2 from "../../assets/Threeimg.jpg";
import img3 from "../../assets/mercuryimg.jpg";
import img4 from "../../assets/Sandimg.jpg";
import img5 from "../../assets/Solimg.jpg";
import img6 from "../../assets/basisimg.jpg";
const Excusivebrand = () => {
  const card = [
    {
      imgUrl: img1,
      para: "French-country looks designed for real life.",
    },
    {
      imgUrl: img2,
      para: "Traditional styles with unexpected details..",
    },
    {
      imgUrl: img3,
      para: "Modern designs with an urban edge.",
    },
    {
      imgUrl: img4,
      para: "Where farmhouse charm meets seaside style.",
    },
    {
      imgUrl: img5,
      para: "All the essentials for an outdoor oasis.",
    },
    {
      imgUrl: img6,
      para: "Affordable essentials that simplify the everyday.",
    },
  ];
  return (
    <div>
      <div className="container">
          <h1 className="font-family text-center pt-4">Explore our Exclusive Brands</h1>
          <p className="para-style text-center">
            Bring your vision to life with hand-curated collections, priced just
            right.
          </p>
        <div class="row">
          {card.map((item) => {
            return (
              <>
                <div class="col-12 col-md-4 col-lg-2">
                  <div className="py-4">
                    <div className="cards">
                      <img src={item.imgUrl} alt="" className="img-fluid" />
                      <p className="para-style py-3">{item.para}</p>
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

export default Excusivebrand;
