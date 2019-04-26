import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addDogThunk} from '../store/dog'
class AddDog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      puppyName: '',
      age: '',
      gender: '',
      // file: '',
      // imagePreviewUrl: '',
      imgUrl: '',
      size: '',
      breed: '',
      personality: '',
      userId: props.id
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
      // file: '',
      // imagePreviewUrl: '',
      size: '',
      breed: '',
      personality: ''
    })
  }
  render() {
    // let {imagePreviewUrl} = this.state
    // let $imagePreview = null
    // if (imagePreviewUrl) {
    //   $imagePreview = <img src={imagePreviewUrl} />
    // } else {
    //   $imagePreview = (
    //     <div className="previewText">Please select an Image for Preview</div>
    //   )
    // }
    return (
      <div>
        <h3 className="add-dog-header">
          {' '}
          Please fill out the fields below to ensure pleasant playdates for your
          pups!{' '}
        </h3>
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
              <select
                name="gender"
                value={this.state.gender}
                onChange={this.handleChange}
              >
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
            {/* <div className="image-upload-container"> */}
            {/* <input
                className="fileInput"
                type="file"
                onChange={e => this.handleImageChange(e)}
              /> */}
            {/* <div className="imgPreview">{$imagePreview}</div> */}
            {/* <button
                className="submitButton"
                type="submit"
                onClick={e => this._handleSubmit(e)}
              >
                Upload Image
              </button> */}
            {/* </div> */}
            <div>
              <label htmlFor="size">
                <small>Size</small>
              </label>
              <select
                name="size"
                value={this.state.size}
                onChange={this.handleChange}
              >
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
    console.log('newDogObj', newDog)
    dispatch(addDogThunk(newDog))
  }
})
export default connect(mapState, mapDispatch)(AddDog)
