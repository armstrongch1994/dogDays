import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {me} from './store'
import {Navbar} from './components'
import Routes from './routes'
import {ShelterSubnav} from './components'
import {SitterSubnav} from './components'
import {Footer} from './components'
class App extends Component {
  componentDidMount() {
    console.log('component mounted')
    this.props.loadInitialData()
  }
  render() {
    const {isLoggedIn, isShelter, isSitter} = this.props
    if (isShelter) {
      return (
        <div>
          <Navbar />
          <ShelterSubnav />
          <Routes />
          <Footer />
        </div>
      )
    } else if (isSitter) {
      return (
        <div>
          <Navbar />
          <SitterSubnav />
          <Routes />
          <Footer />
        </div>
      )
    }
    return (
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    )
  }
}
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

export default withRouter(connect(mapState, mapDispatch)(App))
