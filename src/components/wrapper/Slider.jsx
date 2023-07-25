import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import SlideCard from "../SliderCard/SlideCard";
import { SliderData } from "../../data/slideData";

const SliderHome = () => {
  const { vie, eng } = SliderData;
  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section
      className="homeSlide"
      style={{
        backgroundColor: "rgb(228, 201, 170)",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Slider {...settings}>
          {eng.map((value, index) => {
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
