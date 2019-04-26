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
  ShelterHome,
  AddDog,
  shelterDogs,
  userDogs
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
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Carousel} />
        {isSitter && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/sitterhome" component={SitterHome} />
            <Route path="/allDogs" component={userDogs} />
          </Switch>
        )}
        {isShelter && (
          <Switch>
            <Route path="/shelterhome" component={ShelterHome} />
            <Route path="/addDog" component={AddDog} />
            <Route path="/allMyDogs" component={shelterDogs} />
          </Switch>
        )}
        {/* Displays our carousel component as a fallback */}
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
