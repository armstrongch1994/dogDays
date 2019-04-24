import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Carousel from './carousel'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <h2>
        This is the homepage that displays to any visitor that is not logged in
      </h2>
      <Carousel />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
