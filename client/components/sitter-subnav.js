import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SitterSubnav extends Component {
  render() {
    return (
      <div>
        <nav className="sitter-subnav">
          <ul>
            <li>
              <Link to="/sitterhome"> My Home </Link>
            </li>
            <li>
              <Link to="/allDogs"> All Pups </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default SitterSubnav
