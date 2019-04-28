const Sequelize = require('sequelize')
const db = require('../db')
const axios = require('axios')

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
  size: {
    type: Sequelize.STRING
  },
  breed: {
    type: Sequelize.STRING
  },
  personality: {
    type: Sequelize.STRING
  }
  // bookings: {
  //   type: Sequelize.ARRAY(Sequelize.TEXT)
  // }
})

module.exports = Dog

// Dog.beforeCreate(dog => {
//   let url = dog.imgUrl
//   const getImageLink = async () => {
//     console.log('this function is being called')
//     try {
//       let {data} = await axios.get(url)
//       console.log('data message', data.message)
//       console.log(typeof data.message)
//       dog.imgUrl = data.message
//       console.log(dog.imgUrl)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   getImageLink()
// })
// Dog.beforeCreate(dog => {
//   dog.puppyName = dog.puppyName.toUpperCase()
// })
