import React from "react";
import "./shope.css";
import imgSale from "../../assets/Sale.webp";
import imgHoliday from "../../assets/Holiday.jpg";
import imgFurniture from "../../assets/Furniture.webp";
import imgOutdoor from "../../assets/Outdoor.webp";
import imgBed from "../../assets/Badding.webp";
import imgDecore from "../../assets/Decore1.png";
import imgRugs from "../../assets/default_name.webp";
import imgLight from "../../assets/Lighting.webp";
import imgHome from "../../assets/Home2.jpg";
import imgApplince from "../../assets/Applinces2.jpg";
import imgKitchen from "../../assets/Kitchen.webp";
import imgBaby from "../../assets/BabyKit.webp";
import imgOrg from "../../assets/organization.webp";
import imgcustom from "../../assets/custom2.jpg";
import { Link } from "react-router-dom";
const Shope = () => {
  const data = [
    {
      id: "2",
      imgurl: imgSale,
      txt: "Fall Clearance",
    },
    {
      imgurl: imgHoliday,
      txt: "Holiday",
    },
    {
      id: "1",
      imgurl: imgFurniture,
      txt: "Furniture",
    },
    {
      imgurl: imgOutdoor,
      txt: "Outdoor",
    },
    {
      imgurl: imgBed,
      txt: "Bedding & Bath",
    },
    {
      imgurl: imgDecore,
      txt: "Decor & Pillows",
    },
    {
      imgurl: imgRugs,
      txt: "Rugs",
    },
    {
      imgurl: imgLight,
      txt: "Lighting",
    },
    {
      imgurl: imgHome,
      txt: "Home Improvement",
    },
    {
      imgurl: imgApplince,
      txt: "Appliances",
    },
    {
      imgurl: imgKitchen,
      txt: "Kitchen",
    },
    {
      imgurl: imgBaby,
      txt: "Baby & Kids",
    },
    {
      imgurl: imgOrg,
      txt: "Organization",
    },
    {
      imgurl: imgcustom,
      txt: "Custom Cabinetry",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="text-center py-5">
          <h1 className="font-family">Shop by Department</h1>
        </div>
        <div class="image-grid">
          {data.map((item) => {
            return (
              <>
                <Link to={`/Furniture/${item.id}`} className="text-decoration-none" >
                  <div class="image-card cards">
                    <img src={item.imgurl} alt="" className="img-fluid" />
                    <p>{item.txt}</p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shope;
