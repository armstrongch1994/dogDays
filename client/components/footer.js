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
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="email">
            Get updated whenever a shelter adds a new dog{' '}
          </label>
          <input name="email" type="text" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    )
  }
}
// const mapDispatch = dispatch => ({
//   addSubscriber: event => {
//     event.preventDefault()
//     console.log('event.target', event.target)
//     dispatch(newSubscriberThunk(event.target.email.value))
//   }
// })

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      dispatch(newSubscriberThunk(email))
    }
  }
}
export default connect(null, mapDispatch)(footer)
