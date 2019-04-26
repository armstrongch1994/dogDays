const Sequelize = require('sequelize')
const db = require('../db')

const Dog = db.define('dog', {
  puppyName: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  gender: {
    type: Sequelize.STRING
  },
  imgUrl: {
    type: Sequelize.STRING
  },
  // file: {
  //   type: Sequelize.STRING
  // },
  // imagePreviewUrl: {
  //   type: Sequelize.TEXT
  // },
  size: {
    type: Sequelize.STRING
  },
  breed: {
    type: Sequelize.STRING
  },
  personality: {
    type: Sequelize.STRING
  }
})

module.exports = Dog
