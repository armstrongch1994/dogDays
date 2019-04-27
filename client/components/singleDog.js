import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleDogThunk} from '../store/dog'
import Calendar from 'react-calendar'

class SingleDog extends Component {
  state = {
    date: new Date()
  }
  componentDidMount() {
    this.props.onLoadSingleDog()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.dogId !== this.props.match.params.dogId) {
      this.props.onLoadSingleDog()
    }
  }
  onChange = date => {
    console.log(date)
    this.setState({
      date: date
    })
  }
  render() {
    console.log('the date', this.state.date)
    return (
      <div>
        <h2 className="single-dog-intro">
          Meet {this.props.dog.puppyName} - a {this.props.dog.age} year old{' '}
          {this.props.dog.breed}. Typically, {this.props.dog.puppyName} is{' '}
          {this.props.dog.personality}!
        </h2>
        <div className="calendar-image">
          <img src={this.props.dog.imgUrl} />
          <Calendar onChange={this.onChange} value={this.state.date} />
        </div>
        <button type="submit">Confirm Date</button>
        {/* clicking confirm date adds that date to to an array in the dogs data base and ideally blocks it off in the calendar
        it also adds that dog to the users profile - so im a user logged in 
        */}
      </div>
    )
  }
}

const mapState = state => ({
  dog: state.dog.singleDog
})

const mapDispatch = (dispatch, ownProps) => ({
  onLoadSingleDog: () => {
    const singleDogId = ownProps.match.params.dogId
    dispatch(getSingleDogThunk(singleDogId))
  }
})

export default connect(mapState, mapDispatch)(SingleDog)
