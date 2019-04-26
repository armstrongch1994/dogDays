import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSheltersDogsThunk} from '../store/dog'

class shelterDogs extends Component {
  componentDidMount() {
    this.props.loadShelterDogs(this.props.id)
  }
  state = {}
  render() {
    console.log('shelter-dogs props', this.props)
    return <div>hello were on the sheler dog page</div>
  }
}
const mapState = state => {
  return {
    id: state.user.id,
    shelterDogs: state.dog.shelterDogs
  }
}
const mapDispatch = dispatch => ({
  loadShelterDogs: shelterId => {
    dispatch(getSheltersDogsThunk(shelterId))
  }
})

export default connect(mapState, mapDispatch)(shelterDogs)
