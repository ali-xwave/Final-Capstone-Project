import React from "react";
import img1 from "../../assets/commit.webp";
import img2 from "../../assets/shopblack.webp";
import img3 from "../../assets/sustain.webp";
import gift from "../../assets/EarnGiftimg.webp";
const Impact = () => {
  const data = [
    {
      imgurl: img1,
      heading: "Contributing to All the Homes We Share",
      para: "Learn more about our DEI, Social Impact, and Sustainability Work →",
    },
    {
      imgurl: img2,
      heading: "Building Supplier Diversity",
      para: "Learn more about the creators behind the businesses →",
    },
    {
      imgurl: img3,
      heading: "All Things Home, Sustainably",
      para: "Discover so many (easy!) ways to live more sustainably →",
    }
  ];
  return (
    <div>
      <div className="container">
        <h1 className="text-center font-family">What We're Doing to Make an Impact</h1>
        <div className="row pb-5 pt-2">
          {data.map((item) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="text-center">
                    <img src={item.imgurl} alt="" className="img-fluid" />
                    <h5 className="pt-3 card-heading">{item.heading}</h5>
                    <p className="para-style">{item.para}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="row">
          <div className="col-md-12">
            <img src={gift} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
