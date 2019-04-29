const router = require('express').Router()
const {Subscriber} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    let newSubscriber = await Subscriber.create(req.body)
    res.json(newSubscriber)
  } catch (error) {
    next(error)
  }
})
