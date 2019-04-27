import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllDogsThunk} from '../store/dog'
import {Link} from 'react-router-dom'
class userDogs extends Component {
  componentDidMount() {
    this.props.loadAllDogs()
  }
  render() {
    console.log('all dogs', this.props.allDogs)
    return (
      <div className="all-dogs-container">
        <h1 className="all-dogs-header"> Meet our furry friends! </h1>
        <div className="all-dogs-list">
          {this.props.allDogs.map(dog => {
            return (
              <div key={dog.id} className="single-dog">
                <div className="image-container">
                  <img className="all-dog-image" src={dog.imgUrl} />
                </div>
                <div className="dog-content">
                  <h3>{dog.puppyName}</h3>
                  <p> age: {dog.age} </p>
                  <p> gender: {dog.gender} </p>
                  <p> size: {dog.size} </p>
                  <p>breed: {dog.breed} </p>
                  <p> personality: {dog.personality} </p>
                  <p>
                    Want to spend the day with {dog.puppyName}?
                    <Link to={`/allDogs/${dog.id}`}>
                      Check out his availability
                    </Link>
                  </p>
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
