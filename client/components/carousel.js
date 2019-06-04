import React from 'react'
import Slider from 'react-slick'

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 1,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <Slider {...settings}>
        <div>
          <img src="/images/carousel/C1.jpg" />
        </div>
        <div>
          <img src="/images/dogs/gus.jpg" />
        </div>
        <div>
          <img src="/images/carousel/C3.jpg" />
        </div>
        <div>
          <img src="/images/carousel/C4.jpg" />
        </div>
        <div>
          <img src="/images/dogs/lincoln.jpg" />
        </div>
        <div>
          <img src="/images/dogs/bella.jpg" />
        </div>
      </Slider>
    )
  }
}

export default Carousel
