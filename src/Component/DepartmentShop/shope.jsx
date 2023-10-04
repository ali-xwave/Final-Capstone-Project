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
const Shope = () => {

  return (
    <>
      <div className="container">
        <div className="text-center py-5">
          <h1 className="font-family">Shop by Department</h1>
        </div>
        <div class="image-grid">
          <div class="image-card">
            <img src={imgSale} alt="" className="img-fluid" />
            <p>Fall Clearance</p>
          </div>
          <div class="image-card">
            <img src={imgHoliday} alt="" className="img-fluid"/>
            <p>Holiday</p>
          </div>

          <div class="image-card">
            <img src={imgFurniture} alt="" className="img-fluid"/>
            <p>Furniture</p>
          </div>
          <div class="image-card">
            <img src={imgOutdoor} alt="" className="img-fluid"/>
            <p>Outdoor</p>
          </div>
          <div class="image-card">
            <img src={imgBed} alt="" className="img-fluid"/>
            <p>Bedding & Bath</p>
          </div>
          <div class="image-card">
            <img src={imgDecore} alt="" className="img-fluid"/>
            <p>Decor & Pillows</p>
          </div>
          <div class="image-card">
            <img src={imgRugs} alt="" className="img-fluid"/>
            <p>Rugs</p>
          </div>
        </div>

        <div class="image-grid">
          <div class="image-card">
            <img src={imgLight } alt="" className="img-fluid"/>
            <p>Lighting</p>
          </div>

          <div class="image-card">
            <img src={imgHome} alt="" className="img-fluid"/>
            <p>Home Improvement</p>
          </div>

          <div class="image-card">
            <img src={imgApplince} alt="" className="img-fluid"/>
            <p>Appliances</p>
          </div>
          <div class="image-card">
            <img src={imgKitchen} alt="" className="img-fluid"/>
            <p>Kitchen</p>
          </div>
          <div class="image-card">
            <img src={imgBaby} alt="" className="img-fluid"/>
            <p>Baby & Kids</p>
          </div>
          <div class="image-card">
            <img src={imgOrg} alt="" className="img-fluid"/>
            <p>Organization</p>
          </div>
          <div class="image-card">
            <img src={imgcustom} alt="" className="img-fluid"/>
            <p>Custom Cabinetry</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shope;
