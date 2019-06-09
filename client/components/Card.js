import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <p className="name">{this.props.dog.puppyName}</p>
          <p>
            <b>Gender: </b>
            {this.props.dog.gender}
          </p>
          <p>
            <b>Size: </b> {this.props.dog.size}
          </p>
          <p>
            <b>Personality: </b>
            {this.props.dog.personality}
          </p>
          <p>Want to spend the day with {this.props.dog.puppyName}?</p>
          <Link to={`/allDogs/${this.props.dog.id}`}>
            Check availability <i className="fa fa-arrow-right" />
          </Link>
        </div>
        {/* <div className="image">
          <img src={this.props.dog.imgUrl} />
        </div> */}
        <div
          className="backgroundImage"
          style={{backgroundImage: `url(${this.props.dog.imgUrl})`}}
        />
      </div>
    )
  }
}
export default Card
