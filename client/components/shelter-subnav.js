import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import ShelterHome from './shelter-home'
class ShelterSubnav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="shelterhome"> Shelter Home Page (Add dog) </Link>
            </li>
            <li>
              <Link to="/allDogs"> All your current Dogs</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default ShelterSubnav
