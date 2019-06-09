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
router.put('/filteredDogs', async (req, res, next) => {
  try {
    let category = req.body.category
    console.log('category', category)
    let categoryType = req.body.categoryType
    let filteredDogs = await Dog.findAll({
      where: {
        [category]: categoryType
      }
    })
    res.json(filteredDogs)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    let dogId = Number(req.params.id)
    const dogsById = await Dog.findOne({
      where: {id: dogId}
    })
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
      console.log('we found a dog with this id', req.body)
      let updatedDog = dogById.update(req.body)
    }
  } catch (error) {
    next(error)
  }
})
