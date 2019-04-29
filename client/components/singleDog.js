import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleDogThunk} from '../store/dog'
import {addBookingThunk, getSingleDogBookingThunk} from '../store/bookings'
import Calendar from 'react-calendar'

function dateParser(date) {
  let indexOfT = date.indexOf('T')

  let removeTime = date.slice(1, indexOfT)

  let YMD = removeTime.split('-')
  return YMD
}
class SingleDog extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount() {
    this.props.onLoadSingleDog()
    this.props.onLoadDogBookings()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.dogId !== this.props.match.params.dogId) {
      this.props.onLoadSingleDog()
      this.props.onLoadDogBookings()
    }
  }

  onChange = date => {
    this.setState({
      date: date
    })
  }

  render() {
    let bookings = this.props.bookings

    if (bookings.length === 0) {
      return (
        <div>
          <h2 className="single-dog-intro">
            Meet {this.props.dog.puppyName} - a {this.props.dog.age} year old{' '}
            {this.props.dog.breed}. Typically, {this.props.dog.puppyName} is{' '}
            {this.props.dog.personality}!
          </h2>
          <div className="calendar-image">
            <img src={this.props.dog.imgUrl} />
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
              activeStartDate={new Date()}
              minDate={new Date()}
            />
          </div>
          <div className="confirm-booking-button">
            Would you like to confirm your booking?
            <button
              onClick={() => {
                this.props.updateDogAvailability(
                  this.state.date,
                  this.props.dog.id
                )
              }}
              type="submit"
            >
              Confirm
            </button>
          </div>
        </div>
      )
    } else {
      const disabledDates = bookings[0].map(obj => {
        const YMD = dateParser(obj.date)
        let [year, month, day] = YMD
        year = Number(year)
        month = Number(month) - 1
        day = Number(day)
        return new Date(year, month, day)
      })
      return (
        <div>
          <h2 className="single-dog-intro">
            Meet {this.props.dog.puppyName} - a {this.props.dog.age} year old{' '}
            {this.props.dog.breed}. Typically, {this.props.dog.puppyName} is{' '}
            {this.props.dog.personality}!
          </h2>
          <div className="confirm-booking-container">
            <div className="calendar-image">
              <img src={this.props.dog.imgUrl} />
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
                activeStartDate={new Date()}
                minDate={new Date()}
                tileDisabled={({date, view}) =>
                  view === 'month' &&
                  disabledDates.some(
                    disabledDate =>
                      date.getFullYear() === disabledDate.getFullYear() &&
                      date.getMonth() === disabledDate.getMonth() &&
                      date.getDate() === disabledDate.getDate()
                  )
                }
              />
            </div>
            <div className="button-text-container">
              <div className="confirm-booking-button">
                Would you like to confirm your booking?
              </div>
              <button
                className="confirm-date-button"
                onClick={() => {
                  this.props.updateDogAvailability(
                    this.state.date,
                    this.props.dog.id
                  )
                }}
                type="submit"
              >
                Confirm Date
              </button>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapState = state => ({
  dog: state.dog.singleDog,
  bookings: state.booking.singleDogBooking
})

const mapDispatch = (dispatch, ownProps) => ({
  onLoadSingleDog: () => {
    const singleDogId = ownProps.match.params.dogId
    dispatch(getSingleDogThunk(singleDogId))
  },
  onLoadDogBookings: () => {
    const singleDogId = ownProps.match.params.dogId
    dispatch(getSingleDogBookingThunk(singleDogId))
  },
  updateDogAvailability: (date, dogId) => {
    dispatch(addBookingThunk(date, dogId))
  }
})

export default connect(mapState, mapDispatch)(SingleDog)
