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
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeItem } from "../../Store/cardSlice/cardSlice";
const Header = () => {
  const { items } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  console.log(items);

  const removeItemHandler = (item) => {
    dispatch(removeItem(item))
  }
  
  const increaseQuantityHandler = (item) => {
    dispatch(increaseQuantity(item))
  }

  const deccreaseQuantityHandler = (item) => {
    dispatch(decreaseQuantity(item))
  }

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
              <button className="w-100 rounded-pill py-2 border bg-color text-white para-style">Sign Out</button>
            </div>
          </div>
          <span class="txt display-menu">Menu</span>
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
            <Link to="/SignIn" href="" className="text-decoration-none text-dark">
              <img src={btn_sign} alt="" className="img-fluid" />
              <span className="px-2 sign-display txt">Sign In</span>
            </Link>
            <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={btn_cart} alt="" className="img-fluid" /><span class="badge text-white bg-color">{items.length === 0 ? '' : <span>{items.length}</span>}</span><span className="display txt ps-1">Cart</span></span>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title cart-p fw-bold" id="offcanvasRightLabel">In Your Cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <hr />
              <div class="offcanvas-body">
                {
                  items?.map((i) => {
                    return (
                      <>
                        <div>
                          <div className="d-flex">
                            <div>
                              <img src={i?.img} alt="" style={{ width: 200, height: 255 }} />
                            </div>

                            <div style={{ paddingLeft: 15, paddingTop: 60 }}>
                              <button className="border-0 rounded bg-color text-white fw-bold" onClick={() => deccreaseQuantityHandler(i)} style={{ width: 50 }}>-</button>
                              <span className='px-2 fw-bold'>{i?.quantity}</span>
                              <button className="border-0 rounded bg-color text-white fw-bold" onClick={() => increaseQuantityHandler(i)} style={{ width: 50 }}>+</button><br />
                              <button className="border-0 rounded txt-color bg-light fw-bold mt-3 px-2 py-2 ms-4" onClick={() => removeItemHandler(i)}>Remove</button>
                            </div>
                          </div>

                          <p className="fw-bold">{i?.txt1}</p>
                          <div className='d-flex'>
                            <span className='pt-2'>{i.txt7}</span>
                            <h2>{i.txt2}</h2><p className='pt-2 ps-2'><del>{i.txt3}</del></p>
                          </div>
                          <p className="fw-bold">{i.txt5}</p>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
