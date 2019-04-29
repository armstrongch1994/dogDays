import React, {Component} from 'react'
function createCurrentYear() {
  let date = new Date()
  console.log(date)
  return date.getFullYear()
}

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
    console.log(date)
    let currentYear = date.getFullYear()
    console.log('set the sage')
    this.setState({
      currentYear
    })
  }

  render() {
    return (
      <div>
        <h1>Dog Days</h1>
        <div>
          <i className="fa fa-copyright" /> {this.state.currentYear}
        </div>
        <label htmlFor="email">
          Subscribe to get updates when a new dog is added to the site!{' '}
        </label>
        <input name="email" type="text" />
      </div>
    )
  }
}

export default footer
