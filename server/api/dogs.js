const router = require('express').Router()
const {Dog} = require('../db/models')
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
    const newDog = await Dog.create(req.body)
    console.log(newDog)
    res.json(newDog)
  } catch (error) {
    next(error)
  }
})
