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
  userDogs,
  SingleDog,
  confirmBookingPage,
  ConfirmSubscriptionPage,
  ConfirmDogSubmission
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
        <Route path="/confirmSubscriber" component={ConfirmSubscriptionPage} />
        {isSitter && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/" component={Carousel} />
            <Route path="/sitterhome" component={SitterHome} />
            <Route exact path="/allDogs" component={userDogs} />
            <Route path="/allDogs/:dogId" component={SingleDog} />
            <Route path="/thankYou" component={confirmBookingPage} />
            /confirmSubscriber
          </Switch>
        )}
        {isShelter && (
          <Switch>
            <Route path="/shelterhome" component={ShelterHome} />
            <Route path="/addDog" component={AddDog} />
            <Route path="/allMyDogs" component={shelterDogs} />
            <Route
              path="/confirmDogSubmission"
              component={ConfirmDogSubmission}
            />
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
