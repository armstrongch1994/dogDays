import React from 'react'
import {getAllDogsThunk, getfilteredDogsThunk} from '../store/dog'
import {connect} from 'react-redux'

class NativeSelects extends React.Component {
  constructor() {
    super()
    this.state = {
      personality: '',
      size: '',
      gender: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.loadFilteredDogs(this.state)
    // this.setState({
    //   personality: '',
    //   size: '',
    //   gender: ''
    // })
  }
  resetFilters() {}
  render() {
    const {classes} = this.props
    this.InputLabelRef = React.createRef()
    return (
      <div className="filter-dogs-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="gender">
              <small>Gender</small>
            </label>
            <select
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option default>Gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          <div>
            <label htmlFor="size">
              <small>Size</small>
            </label>
            <select
              name="size"
              value={this.state.size}
              onChange={this.handleChange}
            >
              <option default>Size</option>
              <option value="extraSmall">Extra Small</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extraLarge">Extra Large</option>
            </select>
          </div>

          <div>
            <label htmlFor="personality">
              <small>Personality Type</small>
            </label>

            <select
              name="personality"
              value={this.state.personality}
              onChange={this.handleChange}
            >
              <option default>Personality Type</option>
              <option value="lazy">Lazy</option>
              <option value="mellow">mellow</option>
              <option value="Energetic">Energetic</option>
              <option value="wild">wild</option>
            </select>
          </div>
          <button type="submit">Filter</button>
          <button type="button" onClick={() => this.resetFilters}>
            Clear
          </button>
        </form>
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
  loadFilteredDogs: filters => {
    dispatch(getfilteredDogsThunk(filters))
  }
})

export default connect(mapState, mapDispatch)(NativeSelects)
