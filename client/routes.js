import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  Carousel,
  SitterHome,
  ShelterHome
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isShelter, isSitter} = this.props
    console.log('isLoggedIn', isLoggedIn)
    console.log('is a sitter', isSitter)
    console.log('is a shelter', isShelter)

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isSitter && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={SitterHome} />
          </Switch>
        )}
        {isShelter && (
          <Switch>
            <Route path="/home" component={ShelterHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Carousel} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isShelter: state.user.userType === 'shelter',
    isSitter: state.user.userType === 'sitter'
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
