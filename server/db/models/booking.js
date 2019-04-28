const Sequelize = require('sequelize')
const db = require('../db')

const Booking = db.define('booking', {
  date: {
    type: Sequelize.STRING
  }
})

module.exports = Booking
