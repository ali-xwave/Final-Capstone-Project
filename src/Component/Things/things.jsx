import React from "react";
import img1 from "../../assets/thing1.jpg";
import img2 from "../../assets/thing2.jpg";
import img3 from "../../assets/thing3.jpg";
import img4 from "../../assets/thing4.jpg";
const Things = () => {
    const cards = [
        {
            img: img1,
            heading: "Unbeatable Selection",
            text: "All things home, all in one place.",
        },
        {
            img: img2,
            heading: "Expert Customer Service",
            text: "Our friendly team's on hand seven days a week.",
        },
        {
            img: img3,
            heading: "Fast & Free Shipping Over $35*",
            text: "Plus, two-day delivery on thousands of items.",
        },
        {
            img: img4,
            heading: "Amazing Value Every Day",
            text: "Items you love at prices that fit your budget.",
        },
    ]
  return (
    <div>
      <div className="container">
        <div className="row">
          {cards.map((item) => {
            return (
              <>
                <div className="col-md-3">
                    <div className="text-center py-5">
                        <img src={item.img} alt="" className="img-fluid" />
                        <h4 className="card-heading">{item.heading}</h4>
                        <p className="para-style">{item.text}</p>
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

export default Things;
