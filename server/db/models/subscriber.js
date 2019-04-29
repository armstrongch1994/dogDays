const Sequelize = require('sequelize')
const db = require('../db')

const Subscriber = db.define('subscriber', {
  email: {
    type: Sequelize.STRING
  }
})

module.exports = Subscriber
