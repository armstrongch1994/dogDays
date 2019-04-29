import React, {Component} from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      value: 'null'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log('my value is getting change')
    this.setState({value: event.target.value})
    console.log('event.target.value', event.target.value)
    console.log('STATE', this.state.value)
  }
  render() {
    return (
      <div>
        <form
          className="signupFormComponent"
          onSubmit={this.props.handleSubmit}
          name={this.props.name}
        >
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
            <label htmlFor="userName">
              <small>name</small>
            </label>
            <input name="userName" type="text" />
          </div>
          <select
            name="userType"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option default>Choose your User Group</option>
            <option value="sitter">Watch Dog!</option>
            <option value="shelter">Shelter!</option>
          </select>
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
      const userName = evt.target.userName.value
      const userType = evt.target.userType.value
      dispatch(auth(email, password, userName, userType, formName))
    }
  }
}

export default connect(mapSignup, mapDispatch)(Signup)
