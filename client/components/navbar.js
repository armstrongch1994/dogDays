import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Login from './login'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="nav-bar">
    <Link to="/home">
      <img className="logo" src="/images/logo/dogDaysLogoNew.jpg" />
    </Link>
    <nav>
      {isLoggedIn ? (
        <div className="right-nav">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="right-nav">
          {/* The navbar will show these links before you log in */}
          <Link className="login" to="/login">
            Login
          </Link>
          <div className="hide">
            <Login />
          </div>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
