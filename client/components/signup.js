import React, {Component} from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      isChecked: false
    }
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
  }
  handleCheckboxClick() {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} name={this.props.name}>
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <input
              type="checkbox"
              id="isShelter"
              value={this.state.isChecked}
              name="isShelter"
              onClick={this.handleCheckboxClick}
            />
            <label htmlFor="isShelter">
              Check this box if you are a Dog Shelter
            </label>
          </div>
          <div>
            <button type="submit">{this.props.displayName}</button>
          </div>
          {this.props.error &&
            this.props.error.response && (
              <div> {this.props.error.response.data} </div>
            )}
        </form>
        <a href="/auth/google">{this.props.displayName} with Google</a>
      </div>
    )
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const isShelter = evt.target.isShelter.value
      dispatch(auth(email, password, isShelter, formName))
    }
  }
}

export default connect(mapSignup, mapDispatch)(Signup)
