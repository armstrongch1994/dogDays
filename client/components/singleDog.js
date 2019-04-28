import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleDogThunk} from '../store/dog'
import {addBookingThunk, getSingleDogBookingThunk} from '../store/bookings'
import Calendar from 'react-calendar'

function dateParser(date) {
  console.log(date)

  let indexOfT = date.indexOf('T')

  let removeTime = date.slice(1, indexOfT)

  let YMD = removeTime.split('-')
  return YMD
  //   let [year, month, day] = YMD
  //   year = Number(year)
  //   month = Number(month)
  //   day = Number(day)
}
class SingleDog extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
    this.onChange = this.onChange.bind(this)
    // this.tileDisabled = this.tileDisabled.bind(this)
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
  // tileDisabled = (date, view) => {
  //   console.log('date inside of tileDisabled', date)
  //   console.log('view inside of tileDisabled', view)
  //   let parsedDates = this.props.bookings.map(obj => {
  //     console.log(obj.date)
  //     //return JSON.parse(obj.date)
  //   })
  //   console.log('PARSED DATES --> ', parsedDates)
  // }
  render() {
    // console.log('the date', this.state.date)
    // console.log('BOOKINGS ---> ', this.props.bookings)
    let bookings = this.props.bookings
    // let parsedBookings = this.props.bookings.map(obj => {
    //   console.log('OBJ INSIDE MAP', obj)
    // })
    // console.log('PARSEDBOOKINGS', parsedBookings)
    // console.log(Array.isArray(this.props.bookings))

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
          </div>
          <button
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
          {/* clicking confirm date adds that date to to an array in the dogs data base and ideally blocks it off in the calendar
          it also adds that dog to the users profile - so im a user logged in 
          */}
        </div>
      )
    } else {
      const disabledDates = bookings[0].map(obj => {
        // let date = JSON.parse(obj.date)
        // console.log('old date', obj.date)
        // console.log('date parser func', dateParser(date))
        const YMD = dateParser(obj.date)
        let [year, month, day] = YMD
        year = Number(year)
        month = Number(month)
        day = Number(day)
        console.log(year, month, day)
        return new Date(year, month, day)
      })
      console.log(disabledDates)
      return (
        <div>
          <div>bookings has a length</div>
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
          <div className="confirm-booking-button">
            Would you like to confirm your booking?
          </div>
          <button
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
          {/* clicking confirm date adds that date to to an array in the dogs data base and ideally blocks it off in the calendar
          it also adds that dog to the users profile - so im a user logged in 
          */}
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
