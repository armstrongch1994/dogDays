import React, {Component} from 'react'
import {connect} from 'react-redux'
class ShelterHome extends Component {
  render() {
    return (
      <div>
        <h1 className="welcome-banner">
          Welcome, {this.props.name}! Were delighted to see you.{' '}
        </h1>
        <p>
          {' '}
          If you're here to add another lucky pup to the site, head on over to
          the 'Add a pup' tab - you know the drill!{' '}
        </p>
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
export default connect(mapState)(ShelterHome)
