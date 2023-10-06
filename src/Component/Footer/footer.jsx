import React from "react";
import "./footer.css";
import question from "../../assets/icon.jpg";
import twit from "../../assets/twitter.png"
import face from "../../assets/facebook.png"
import pin from "../../assets/pintrest.png"
import insta from "../../assets/instagram.png"
import jossmain from "../../assets/jm.png"
import Allmoderan from "../../assets/jm2.png"
import birchln from "../../assets/jm3.png"

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
        <div className="d-flex py-4">
          <img src={jossmain} alt="Joss&main" className="imgsize" />
          <img src={Allmoderan} alt="Allmoderan" className="imgsize-two px-4" />
          <img src={birchln} alt="birchln" className="imgsize" />
        </div>
        <div>
          <span className="px-3"><img src={twit} alt="" className="img-fluid twit" /></span>
          <span><img src={face} alt="" className="img-fluid face" /></span>
          <span className="px-3"><img src={pin} alt="" className="img-fluid pin" /></span>
          <span><img src={insta} alt="" className="img-fluid insta" /></span>
        </div>

        <div className="Anchor">
          <span><a href="">Terms of use</a></span>
          <span><a href="">Privacy Policy</a></span>
          <span><a href="">Your Privacy Rights & Choices</a></span>
          <p className="pt-3 ps-2">© 2002 - 2023 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
