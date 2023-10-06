import React from "react";
import img1 from "../../assets/Saleplus.webp";
import img2 from "../../assets/S.webp";
import img3 from "../../assets/boximg.webp";
import img60 from "../../assets/financeimg.jpg";
const Ways = () => {
  const data = [
    {
      imgurl: img1,
      Heading: "The Surplus Sale",
      Para: "Deals so good, they feel like a mistake →",
    },

    {
      imgurl: img2,
      Heading: "Closeout Deals",
      Para: "Save on discontinued products before they disappear →",
    },

    {
      imgurl: img3,
      Heading: "Open Box Deals",
      Para: "Their return, your reward! Shop like-new items for less →",
    },
  ];
  return (
    <div>
      <div className="container">
        <h1 className="font-family text-center">
          Three Different Ways to Save
        </h1>
        <div className="row">
          {data.map((item) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="text-center">
                    <img src={item.imgurl} alt="" className="img-fluid" />
                    <h1 className="card-heading pt-3">{item.Heading}</h1>
                    <p className="para-style">{item.Para}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="row pt-3 pb-5">
          <div className="col-md-12 image">
            <img src={img60} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ways;
