import React from 'react'
import Slider from 'react-slick'

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Slider {...settings}>
        <div>
          <h3> Welcome Image </h3>
        </div>
        <div>
          <h3> Want to Determine the breed of your rescue? Let us help! </h3>
        </div>
        <div>
          <h3> Donate to one of the many Shelters on our site. </h3>
        </div>
        <div>
          <h3>User of the Week </h3>
        </div>
      </Slider>
    )
  }
}

export default Carousel
