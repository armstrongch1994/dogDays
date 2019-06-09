import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllDogsThunk, getfilteredDogsThunk} from '../store/dog'
import NativeSelects from './select'

import Card from './card'

class userDogs extends Component {
  componentDidMount() {
    this.props.loadAllDogs()
  }
  render() {
    return (
      <div className="all-dogs-container">
        <h1 className="all-dogs-header"> Meet our furry friends! </h1>
        <div className="filters">
          <NativeSelects />
        </div>
        <div className="all-dogs-list">
          {this.props.allDogs.map(dog => {
            return <Card dog={dog} key={dog.id} />
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
  },
  loadFilteredDogs: () => {
    dispatch(getfilteredDogsThunk())
  }
})

export default connect(mapState, mapDispatch)(userDogs)
