import React, {Component} from 'react'
import {connect} from 'react-redux'

class SitterHome extends Component {
  render() {
    return (
      <div className="user-welcome">
        <h1 className="welcome-banner">
          Welcome, {this.props.name}! Thank you for joining us! We hope you
          enjoy your next pup playdate!
        </h1>
        <img
          className="user-welcome-banner"
          src="/images/dogs/welcomeImg.jpg"
        />
      </div>
    )
  }
}
const mapState = state => {
  return {
    name: state.user.userName,
    id: state.user.id
  }
}
export default connect(mapState)(SitterHome)
