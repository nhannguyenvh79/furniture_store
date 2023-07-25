import './slider.css';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from "react-bootstrap"
import SlideCardSubmenu from '../SliderCard/SliderCardSubmenu'

export default function SliderSubmenu ({sliderItem}) {
  const settings = {
    nav:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    vertical: false,
    adaptiveHeight: "true",
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick",
      },
      {
        breakpoint: 1200,
        setting: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 1,
          autoplay: true,
          speed: 600,
        }
      }
    ]
  }
  return (
    <div>
      <div className='slider-subm'>
        <Container>
          <Slider {...settings}>
          {sliderItem.map((value, index) => {
            return (
              <SlideCardSubmenu key={index} coverUrl={value.coverUrl} text={value.text}/>
            )
          })}
        </Slider>
        </Container>
      </div>
    </div>
  )
}

