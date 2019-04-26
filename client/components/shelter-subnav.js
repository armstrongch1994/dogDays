import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ShelterSubnav extends Component {
  render() {
    return (
      <div>
        <nav className="shelter-subnav">
          <ul>
            <li>
              <Link to="/shelterHome"> My Home </Link>
            </li>
            <li>
              <Link to="/allMyDogs"> All my Pups</Link>
            </li>
            <li>
              <Link to="/addDog"> Add a pup </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default ShelterSubnav
