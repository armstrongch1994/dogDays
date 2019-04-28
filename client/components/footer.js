import React from 'react'

class footer extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Dog Days</h1>
        <label htmlFor="email">Subscribe to our Newsletter</label>
        <input name="email" type="text" />
      </div>
    )
  }
}

export default footer
