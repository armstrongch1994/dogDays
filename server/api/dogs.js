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
    let dogId = Number(req.params.id)
    console.log('dogId', dogId)
    const dogsById = await Dog.findOne({
      where: {id: dogId}
    })
    console.log('dogsById', dogsById)
    res.json(dogsById)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    let dogId = Number(req.params.id)
    const dogById = await Dog.findOne({
      where: {id: dogId}
    })
    if (dogById) {
      dogById.update()
    }
  } catch (error) {
    next(error)
  }
})
