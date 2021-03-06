import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllDogsThunk, getfilteredDogsThunk} from '../store/dog'

class filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personality: '',
      size: '',
      gender: ''
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      personality: '',
      size: '',
      gender: ''
    })
  }
  render() {
    return (
      <div>
        <div className="addDogFormComponent">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="puppyName">
                <small>Name</small>
              </label>
              <input
                name="puppyName"
                type="text"
                value={this.state.puppyName}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="age">
                <small>Age</small>
              </label>
              <input
                name="age"
                type="text"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </div>
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
              <label htmlFor="imgUrl">
                <small>Image</small>
              </label>
              <input
                name="imgUrl"
                type="text"
                value={this.state.imgUrl}
                onChange={this.handleChange}
              />
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
              <label htmlFor="breed">
                <small>Breed</small>
              </label>
              <input
                name="breed"
                type="text"
                value={this.state.breed}
                onChange={this.handleChange}
              />
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
            <div className="button-wrapper">
              <button
                onClick={() => {
                  this.props.addDog(this.state)
                }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapState = state => {
  return {
    id: state.user.id
  }
}

const mapDispatch = dispatch => ({
  addDog: newDog => {
    dispatch(addDogThunk(newDog))
  }
})
export default connect(mapState, mapDispatch)(filter)
