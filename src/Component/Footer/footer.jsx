import React from "react";
import "./footer.css";
import question from "../../assets/icon.jpg";
import twit from "../../assets/twitter.png"
import face from "../../assets/facebook.png"
import pin from "../../assets/pintrest.png"
import insta from "../../assets/instagram.png"
const Footer = () => {
  return (
    <div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4 para-style">
            <h1 className="card-heading">About Us</h1>
            <p>About Wayfair</p>
            <p>Wayfair Professional</p>
            <p>Gift Cards</p>
            <p>Wayfair Credit Card</p>
            <p>Wayfair Financing</p>
            <p>Careers</p>
            <p>Sell on Wayfair</p>
            <p>Investor Relations</p>
            <p>Advertise With Us</p>
            <p>Locations</p>
          </div>
          <div className="col-md-4  para-style">
            <h1 className="card-heading">Customer Service</h1>
            <p>My Orders</p>
            <p>My Account</p>
            <p>Track My Order</p>
            <p>Wayfair Accessibility Statement</p>
            <p>Return Policy</p>
            <p>Help Center</p>
            <p>Product Recalls</p>
          </div>
          <div className="col-md-4">
            <h1 className="card-heading">Contact Us</h1>

            <button className="para-style px-4 rounded-pill py-2 back-color">
              <img src={question} alt="" className="img-fluid img-width" />
              Quick Help
            </button>
          </div>

        </div>
      </div>
      <hr />

      <div className="container">
        <div className="">
          <span><img src={twit} alt="" className="img-fluid twit" /></span>
          <span><img src={face} alt="" className="img-fluid face"/></span>
          <span><img src={pin} alt="" className="img-fluid pin"/></span>
          <span><img src={insta} alt="" className="img-fluid insta"/></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
