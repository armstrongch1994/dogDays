const Sequelize = require('sequelize')
const db = require('../db')

const Dog = db.define('dog', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  gender: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  size: {
    type: Sequelize.STRING
  },
  weight: {
    type: Sequelize.STRING
  },
  notes: {
    type: Sequelize.TEXT
  }
})

module.exports = Dog
