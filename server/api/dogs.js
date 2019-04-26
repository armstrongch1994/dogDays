const router = require('express').Router()
const {Dog} = require('../db/models')
const whatDog = require('what-dog')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const dogs = await Dog.findAll()
    res.json(dogs)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let dogURL = req.body.imgUrl
    let dogData = await whatDog(dogURL)
    if (dogData.isDog) {
      req.body.breed = dogData.breed
    }
    const newDog = await Dog.create(req.body)
    res.json(newDog)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    let shelterId = Number(req.params.id)
    console.log('shelterId', shelterId)
    const dogsByShelter = await Dog.findAll({
      where: {userId: shelterId}
    })
    console.log('dogsByShelter', dogsByShelter)
    res.json(dogsByShelter)
  } catch (error) {
    next(error)
  }
})
