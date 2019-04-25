import React, {Component} from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'
import {RadioGroup, RadioButton} from 'react-radio-buttons'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      isChecked: false,
      value: 'null'
    }
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleCheckboxClick() {
    this.setState({
      isChecked: !this.state.isChecked
    })
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
      const userType = evt.target.userType.value
      dispatch(auth(email, password, userType, formName))
    }
  }
}

export default connect(mapSignup, mapDispatch)(Signup)
