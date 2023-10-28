import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./hero.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import percentforty from "../../assets/Percent-40.jpg";
import percentSixty from "../../assets/hero-60.jpg";
import fortyFive from "../../assets/hero-45.jpg";
import fiftyFive from "../../assets/shop-55.jpg";
import fifty from "../../assets/Percent-50.jpg";
import img1 from "../../assets/swiper2.jpg";
import img2 from "../../assets/swiper3.jpg";
import img3 from "../../assets/swiper1.jpg";
import img4 from "../../assets/swiper4.jpg";
import imgmodern from "../../assets/Eittaimg.webp";
const Hero = () => {
  return (
    <div>
      <hr />
      <div className="container-fluid px-4">
          <div className="row">
            <div className="col-md-7">
              <div>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="position-relative">
                      <img src={img2} alt="" className="img-fluid" />
                      <div className="position-absolute top-0 start-0">
                        <img src={img1} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="position-relative">
                      <img src={img3} alt="" className="img-fluid" />
                      <div className="position-absolute top-0 start-0">
                        <img src={img4} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-md-5">
              <div className="pd image">
                <img className="img-fluid " src={percentSixty} alt="" />
              </div>
              <div className="pt-2 image" >
                <img src={fifty} alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-md-4">
              <div className="image">
                <img src={percentforty} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="padding image">
                <img src={fortyFive} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-4">
              <div className="image">
                <img src={fiftyFive} alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-md-12 image">
              <div>
                <img src={imgmodern} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
