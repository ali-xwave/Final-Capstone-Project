
import React from "react";
import bar from "../../assets/bars-solid.svg";
import logo from "../../assets/Header-logo.svg";
import btn_sign from "../../assets/sign-in-btn.svg";
import btn_cart from "../../assets/cart-btn.svg";
import "./header.css";
import { Link, Outlet } from "react-router-dom";
import Hero from "../Hero/hero";
const Header = () => {
  return (
    <div>
      <div class="container pt-2">
        <div class="d-flex flex-wrap justify-content-between align-items-center">
          <div>
            <a
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <img src={bar} alt="" class="img-bar img-fluid" />
            </a>
            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                  <img src={logo} alt="" />
                </h5>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <hr />
              <div class="px-3">
                <div>
                  <img src="" alt="" />
                  <p>Department</p>
                  <p>Sale</p>
                  <hr />
                  <h5>My Account</h5>
                  <p>Khan123@gmail.com</p>
                  <p>My Orderd</p>
                  <p>Review My Purchases</p>
                  <hr />
                  <p>Recently Viewed</p>
                  <p>Lists</p>
                  <p>Design Services</p>
                  <p>3D Room Planner</p>
                  <hr />
                  <p>Wayfair Credit Card</p>
                  <p>Wayfair Financing</p>
                  <p>Gift Card</p>
                  <p>Wayfair Professional</p>
                  <p>Help & Contact</p>
                  <hr />
                  <p>Ideas and Advice</p>
                  <p>Download the Wayfair App</p>
                </div>
              </div>
            </div>
          </div>
          <span class="Menu-style display-menu">Menu</span>
          <div>
            <a href="">
              <img src={logo} alt="" class="px-3" />
            </a>
          </div>
          <div class="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="find anything home"
            />
          </div>
          <div class="anchor">
            <img src={btn_sign} alt="" className="img-fluid px-2" />
            <Link to="/SignIn" href="" className="text-decoration-none text-dark">
              <span className="ps-2 sign-display ">Sign In</span>
            </Link>
            <img src={btn_cart} alt="" className="img-fluid" />
            <a href="" className="text-decoration-none text-dark"><span className="display ps-2">Cart</span></a>

          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
