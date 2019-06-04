import React, {Component} from 'react'
import Calendar from 'react-calendar'

class BookingsCalendar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('PROPS', this.props)
    return <Calendar />
  }
}

export default BookingsCalendar
