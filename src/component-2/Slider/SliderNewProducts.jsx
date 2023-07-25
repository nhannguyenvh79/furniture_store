import './slider.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from "react-bootstrap"
import SliderCardNewProducts from "../SliderCard/SliderCardNewProducts"

export default function SliderNewProducts ({newProduct}) {
  const settings = {
    nav:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <div>
      <section className='slider-newproducts'>
        <Container>
          <Slider {...settings}>
          {newProduct.map((item, index) => {
            return (
              <SliderCardNewProducts 
              id={index} 
              productName={item.productName} 
              coverUrl={item.coverUrl} 
              price={item.price} 
              category2={item.category2}
              />
            )
          })}
        </Slider>
        </Container>
      </section>
    </div>
  )
}


