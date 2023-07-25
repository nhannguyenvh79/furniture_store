import './slider.css';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from "react-bootstrap"
import SlideCardMenu from "../SliderCard/SliderCardMenu"

export default function SliderMenu ({sliderItem}) {
  const settings = {
    nav:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
      <section className='slider-menu'>
        <Container>
          <Slider {...settings}>
          {sliderItem.map((value, index) => {
            return (
              <SlideCardMenu key={index} title={value.title} coverUrl={value.coverUrl} desc={value.desc} />
            )
          })}
        </Slider>
        </Container>
      </section>
  )
}

