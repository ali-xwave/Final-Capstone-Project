import React from "react";
import bar from "../../assets/bars-solid.svg";
import logo from "../../assets/Header-logo.svg";
import btn_sign from "../../assets/sign-in-btn.svg";
import btn_cart from "../../assets/cart-btn.svg";
import linksimg1 from "../../assets/Departmentimg.svg";
import linksimg2 from "../../assets/saletag.svg";
import linksimg3 from "../../assets/round-profile.svg";
import linksimg4 from "../../assets/open-box.svg";
import linksimg5 from "../../assets/star-massage.svg";
import linksimg6 from "../../assets/recently-view.svg";
import linksimg7 from "../../assets/heart.svg";
import linksimg8 from "../../assets/squre-box.svg";
import linksimg9 from "../../assets/cradit-card.svg";
import linksimg10 from "../../assets/donation.svg";
import linksimg11 from "../../assets/gift.svg";
import linksimg12 from "../../assets/wayfair-tag.svg";
import linksimg13 from "../../assets/info-icon.svg";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {

  const links = [
    {
      imgurl: linksimg1,
      text: "Departmen"
    },
    {
      imgurl: linksimg2,
      text: "Sale",
      line: <hr></hr>,
    },
    {
      imgurl: linksimg3,
      text: "My Account"
    },
    {
      imgurl: linksimg4,
      text: "My Orderd"
    },
    {
      imgurl: linksimg5,
      text: "Review My Purchases",
      line: <hr></hr>
    },
    {
      imgurl: linksimg6,
      text: "Recently Viewed"
    },
    {
      imgurl: linksimg7,
      text: "Lists"
    },
    {
      imgurl: linksimg8,
      text: "3D Room Planner",
      line: <hr></hr>
    },
    {
      imgurl: linksimg9,
      text: "Wayfair Credit Card"
    },
    {
      imgurl: linksimg10,
      text: "Wayfair Financing"
    },
    {
      imgurl: linksimg11,
      text: "Gift Card"
    },
    {
      imgurl: linksimg12,
      text: "Wayfair Professional"
    },
    {
      imgurl: linksimg13,
      text: "Help & Contact"
    },
  ]
  return (
    <div>
      <div class="container pt-2">
        <div class="d-flex flex-wrap justify-content-between align-items-center">
          <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><img src={bar} alt="" class="img-bar img-fluid" /></button>

          <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasScrollingLabel"><img src={logo} alt="" class="px-3" /></h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              {links.map((item) => {
                return (
                  <>
                    <div className="para-style">
                      <div className="">
                        <span className="px-2"><img src={item.imgurl} alt="" className="img-fluid py-2" width="30px" /></span>
                        <Link className="text-decoration-none text-dark"><span className="py-5">{item.text}</span></Link>
                        <span>{item.line}</span>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
            <div className="bg-light py-4 mx-3">
              <button className="w-100  rounded-pill py-2 border button-color fs-5">Sign Out</button>
            </div>
          </div>
          <span class="Menu-style display-menu">Menu</span>
          <div>
            <Link to="/">
              <img src={logo} alt="" class="px-3" />
            </Link>
          </div>
          <div class="search">
            <input
              className="form-control me-2 rounded border"
              type="search"
              placeholder="find anything home"
            />
          </div>
          <div class="anchor">
            <img src={btn_sign} alt="" className="img-fluid px-2" />
            <Link to="/SignIn" href="" className="text-decoration-none text-dark">
              <span className="px-2 sign-display ">Sign In</span>
            </Link>
            <img src={btn_cart} alt="" className="img-fluid" />
            <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span className="display ps-2">Cart</span></span>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title cart-p fw-bold" id="offcanvasRightLabel">In Your Cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <hr />
              <div class="offcanvas-body">
                <h5>Oh-no! Looks like your cart is empty.</h5>
                <h6>Here are some options to get you started:</h6>
                <div className="py-3">
                  <Link to="/SignIn"><span className="txt-color fs-5"><u>Sign In</u></span></Link><span className="fs-5 ps-2"> to View your saved items </span>
                </div>
                <div>
                  <span className="fs-5">Start saving with</span> <Link><span className="ps-1 txt-color fs-5 "><u> Daily Sales</u></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
