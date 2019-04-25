import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addDogThunk} from '../store/dog'
class ShelterHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      puppyName: '',
      age: '',
      gender: '',
      file: '',
      imagePreviewUrl: '',
      size: '',
      breed: '',
      personality: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleImageChange(e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }

    reader.readAsDataURL(file)
  }
  handleSubmit(event) {
    event.preventDefault()

    this.setState({
      puppyName: '',
      age: '',
      gender: '',
      file: '',
      imagePreviewUrl: '',
      size: '',
      breed: '',
      personality: ''
    })
  }
  render() {
    let {imagePreviewUrl} = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      )
    }
    return (
      <div>
        <h2>Welcome, {this.props.name}</h2>
        <h3> Add a Pup </h3>
        <div className="previewComponent">
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
              <input
                name="gender"
                type="text"
                value={this.state.gender}
                onChange={this.handleChange}
              />
            </div>
            <div className="image-upload-container">
              <input
                className="fileInput"
                type="file"
                onChange={e => this.handleImageChange(e)}
              />
              <div className="imgPreview">{$imagePreview}</div>
              {/* <button
                className="submitButton"
                type="submit"
                onClick={e => this._handleSubmit(e)}
              >
                Upload Image
              </button> */}
            </div>
            <div>
              <label htmlFor="size">
                <small>Size</small>
              </label>
              <input
                name="size"
                type="text"
                value={this.state.size}
                onChange={this.handleChange}
              />
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
              <input
                name="personality"
                type="text"
                value={this.state.personality}
                onChange={this.handleChange}
              />
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
    name: state.user.userName
  }
}

const mapDispatch = dispatch => ({
  addDog: newDog => {
    console.log('newDogObj', newDog)
    dispatch(addDogThunk(newDog))
  }
})
export default connect(mapState, mapDispatch)(ShelterHome)
