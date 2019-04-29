import React, {Component} from 'react'

class confirmBooking extends Component {
  state = {}
  render() {
    return (
      <div className="confirm-booking">
        <h1 className="booking-confirmation">
          Thank you for reserving a booking with this pup! They're anxiously
          awaiting your date.
          <img src="/images/dogs/waiting-dog.jpg" />
        </h1>
      </div>
    )
  }
}

export default confirmBooking
