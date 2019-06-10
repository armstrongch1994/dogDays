import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllDogsThunk, getfilteredDogsThunk, setFilters} from '../store/dog'
import NativeSelects from './select'
import Card from './card'

class userDogs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personality: props.personalityFilter,
      size: props.sizeFilter,
      gender: props.genderFilter
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetFilters = this.resetFilters.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.loadFilteredDogs(this.state)
    this.props.setFilters(this.state)
  }
  resetFilters() {
    this.setState({
      personality: '',
      size: '',
      gender: ''
    })
    this.props.setFilters(this.state)
    this.props.loadFilteredDogs(this.state)
  }
  componentDidMount() {
    this.props.loadFilteredDogs(this.state)
  }
  render() {
    return (
      <div className="all-dogs-container">
        <h1 className="all-dogs-header"> Meet our furry friends! </h1>
        <div className="filters">
          <NativeSelects
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            resetFilters={this.resetFilters}
          />
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
    allDogs: state.dog.dogs,
    personalityFilter: state.dog.personality,
    sizeFilter: state.dog.size,
    genderFilter: state.dog.gender
  }
}
const mapDispatch = dispatch => ({
  loadAllDogs: () => {
    dispatch(getAllDogsThunk())
  },
  loadFilteredDogs: filters => {
    dispatch(getfilteredDogsThunk(filters))
  },
  setFilters: filters => {
    dispatch(setFilters(filters))
  }
})

export default connect(mapState, mapDispatch)(userDogs)
