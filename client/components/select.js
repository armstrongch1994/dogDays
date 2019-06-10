import React from 'react'
import {getfilteredDogsThunk} from '../store/dog'
import {connect} from 'react-redux'

class NativeSelects extends React.Component {
  render() {
    return (
      <div className="filter-dogs-form">
        <form className="filter-form" onSubmit={this.props.handleSubmit}>
          <div>
            <label htmlFor="gender">
              <small>Gender</small>
            </label>
            <select
              className="select"
              name="gender"
              value={this.props.gender}
              onChange={this.props.handleChange}
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
              className="select"
              value={this.props.size}
              onChange={this.props.handleChange}
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
              className="select"
              value={this.props.personality}
              onChange={this.props.handleChange}
            >
              <option default>Personality Type</option>
              <option value="lazy">Lazy</option>
              <option value="mellow">mellow</option>
              <option value="Energetic">Energetic</option>
              <option value="wild">wild</option>
            </select>
          </div>
          <button type="submit">Filter</button>
          <button type="button" onClick={this.props.resetFilters}>
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
  loadFilteredDogs: filters => {
    dispatch(getfilteredDogsThunk(filters))
  }
})

export default connect(mapState, mapDispatch)(NativeSelects)
