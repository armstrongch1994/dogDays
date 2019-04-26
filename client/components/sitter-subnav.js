import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import SitterHome from './sitter-home'
class SitterSubnav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Route path="/SitterHome" component={SitterHome} />
            </li>
            <li>
              <Route path="/allDogs" />
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default SitterSubnav
