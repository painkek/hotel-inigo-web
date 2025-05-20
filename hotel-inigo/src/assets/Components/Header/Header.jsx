import { React } from "react";
import "./Header.css";

import { Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            className={"Swiper-container"}
            autoplay={{ delay: 2500 }}
            parallax={true}
            speed={1000}
            modules={[Autoplay, Parallax]}
          >
            <SwiperSlide>
              <div className="header-slide slide-1">
                <div className="content">
                  <small data-swiper-parallax="-200">
                    Hospitality with heart, Comfort with class
                  </small>
                  <h2 data-swiper-parallax="-400">
                    Enjoy your <span>Luxury </span>Experience <br />
                    here at Inigo Hotel
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header-slide slide-2">
                <div className="content">
                  <small data-swiper-parallax="-200">
                    Hospitality with heart, Comfort with class
                  </small>
                  <h2 data-swiper-parallax="-400">
                    Enjoy your <span>Luxury </span>Experience <br />
                    here at Inigo Hotel
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header-slide slide-3">
                <div className="content">
                  <small data-swiper-parallax="-200">
                    Hospitality with heart, Comfort with class
                  </small>
                  <h2 data-swiper-parallax="-400">
                    Enjoy your <span>Luxury </span>Experience <br />
                    here at Inigo Hotel
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Header;
