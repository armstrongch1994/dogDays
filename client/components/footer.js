import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newSubscriberThunk} from '../store/subscribers'
class footer extends Component {
  constructor() {
    super()
    this.state = {
      currentYear: 2018
    }
  }
  componentDidMount() {
    this.createCurrentYear()
  }
  createCurrentYear() {
    let date = new Date()
    let currentYear = date.getFullYear()
    this.setState({
      currentYear
    })
  }

  render() {
    return (
      <div className="footer">
        <h3>Dog Days</h3>
        <div className="copyright">
          <i className="fa fa-copyright" /> {this.state.currentYear} Dog Days
        </div>
        <label htmlFor="email">
          Get updated whenever a shelter adds a new dog{' '}
        </label>
        <input name="email" type="text" />
        <button type="submit" onClick={() => this.props.addSubscriber(event)}>
          {' '}
          Subscribe
        </button>
      </div>
    )
  }
}
const mapDispatch = dispatch => ({
  addSubscriber: event => {
    event.preventDefault()
    dispatch(newSubscriberThunk(event.target.email.value))
  }
})

export default connect(null, mapDispatch)(footer)
