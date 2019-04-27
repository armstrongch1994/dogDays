import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleDogThunk} from '../store/dog'

class SingleDog extends Component {
  componentDidMount() {
    this.props.onLoadSingleDog()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.dogId !== this.props.match.params.dogId) {
      this.props.onLoadSingleDog()
    }
  }
  render() {
    return (
      <div>
        <h2 className="single-dog-intro">
          Meet {this.props.dog.puppyName} - a {this.props.dog.age} year old{' '}
          {this.props.dog.breed}. Typically, {this.props.dog.puppyName} is{' '}
          {this.props.dog.personality}!
        </h2>
        <div className="calendar-image">
          <img src={this.props.dog.imgUrl} />
        </div>
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
