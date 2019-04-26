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
    res.json(newDog)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    let shelterId = Number(req.params.id)
    const dogsByShelter = await Dog.findAll({
      where: {userId: shelterId}
    })
    res.json(dogsByShelter)
  } catch (error) {
    next(error)
  }
})
