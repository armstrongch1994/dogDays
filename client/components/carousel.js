import React from 'react'
import Slider from 'react-slick'

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: true,
      centerMode: true
    }
    return (
      <Slider {...settings}>
        <div>
          <img src="/images/carousel/C1.jpg" />
        </div>
        <div>
          <img src="/images/carousel/dogs/gus.jpg" />
        </div>
        <div>
          <img src="/images/carousel/C3.jpg" />
        </div>
        <div>
          <img src="/images/carousel/C4.jpg" />
        </div>
      </Slider>
    )
  }
}

export default Carousel
