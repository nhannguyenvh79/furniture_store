import "./banner.css";
import React from "react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);
export default function BannerMenu({ itemData }) {
    return (
        <div>
            <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 30,
                    stretch: 80,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                slidesPerView={"auto"}
                centeredSlides={true}
                style={{ height: "500px" }}
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={60}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
            >
                <div className="swiper-wrapper">
                    {itemData.map(({ coverUrl, id, productName, category2 }) => {
                        return (
                            <SwiperSlide key={id}>
                                <p>{category2}</p>
                                <img src={coverUrl} alt="" />
                                <p>{productName}</p>
                            </SwiperSlide>
                        );
                    })}
                </div>
            </Swiper>
        </div>
    );
};

