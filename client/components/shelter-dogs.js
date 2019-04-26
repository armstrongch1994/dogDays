import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSheltersDogsThunk} from '../store/dog'

class shelterDogs extends Component {
  componentDidMount() {
    this.props.loadShelterDogs(this.props.id)
  }

  render() {
    console.log('shelter-dogs props', this.props.shelterDogs)
    return (
      <div className="shelter-dogs-container">
        <p>All your current dogs available to sitters</p>
        <ul className="shelter-dogs-list">
          {this.props.shelterDogs.map(dog => {
            return (
              <li key={dog.id} className="shelter-dog">
                <p> name: {dog.puppyName} | </p>
                <p> age: {dog.age} | </p>
                <p> gender: {dog.gender} | </p>
                <p> image url: {dog.imgUrl} | </p>
                <p> size: {dog.size} | </p>
                <p>breed: {dog.breed} | </p>
                <p> personality: {dog.personality} </p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
const mapState = state => {
  return {
    id: state.user.id,
    shelterDogs: state.dog.sheltersDogs
  }
}
const mapDispatch = dispatch => ({
  loadShelterDogs: shelterId => {
    dispatch(getSheltersDogsThunk(shelterId))
  }
})

export default connect(mapState, mapDispatch)(shelterDogs)
