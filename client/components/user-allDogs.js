import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllDogsThunk} from '../store/dog'

class userDogs extends Component {
  componentDidMount() {
    this.props.loadAllDogs()
  }
  render() {
    console.log('all dogs', this.props.allDogs)
    return (
      <div className="all-dogs-container">
        <h4 className="all-dogs-header"> All Dogs </h4>
        <div className="all-dogs-list">
          {this.props.allDogs.map(dog => {
            return (
              <div key={dog.id} className="single-dog">
                <div className="dog-content">
                  <p> name: {dog.puppyName} </p>
                  <p> age: {dog.age} </p>
                  <p> gender: {dog.gender} </p>
                  <p> size: {dog.size} </p>
                  <p>breed: {dog.breed} </p>
                  <p> personality: {dog.personality} </p>
                </div>
                <div className="image-container">
                  <img className="all-dog-image" src={dog.imgUrl} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
const mapState = state => {
  return {
    allDogs: state.dog.dogs
  }
}
const mapDispatch = dispatch => ({
  loadAllDogs: () => {
    dispatch(getAllDogsThunk())
  }
})

export default connect(mapState, mapDispatch)(userDogs)
