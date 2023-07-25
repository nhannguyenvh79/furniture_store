import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import SlideCard from "../SliderCard/SlideCard";
import { SliderData } from "../../../data/slideData";
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import { useState } from "react";
import { useEffect } from "react";
const SliderHome = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(SliderData.vie);
  useEffect(() => {
    if (language === "vie") {
      setData(SliderData.vie);
    } else {
      setData(SliderData.eng);
    }
  }, [language]);
  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section
      className="homeSlide bottom-to-top-animation"
      style={{
        backgroundColor: "whitesmoke",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Slider {...settings}>
          {data.map((value, index) => {
            return (
              <SlideCard
                key={index}
                title={value.title}
                cover={value.cover}
                desc={value.desc}
              />
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default SliderHome;
