import './slider.css';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from "react-bootstrap"
import SliderCardAdvertisement from '../SliderCard/SliderCardAdvertisement';

export default function SliderAdvertisement ({adsItems}) {
  const settings = {
    nav:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
      <section className='slider-advertisement'>
        <Container>
          <Slider {...settings}>
          {adsItems.map((value, index) => {
            return (
              <SliderCardAdvertisement 
              key={index} 
              discountName={value.discountName} 
              coverUrl={value.coverUrl} 
              discountNumber={value.discountNumber} 
              category2={value.category2} 
              />
            )
          })}
        </Slider>
        </Container>
      </section>
  )
}
