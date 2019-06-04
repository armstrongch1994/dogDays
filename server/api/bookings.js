const router = require('express').Router()
const {Booking} = require('../db/models')

module.exports = router

router.post('/:dogId', async (req, res, next) => {
  try {
    let dogId = Number(req.params.dogId)
    const newBooking = await Booking.create(req.body)
    res.json(newBooking)
  } catch (error) {
    next(error)
  }
})

router.get('/:dogId', async (req, res, next) => {
  try {
    let dogId = Number(req.params.dogId)
    let dogsBookings = await Booking.findAll({
      where: {
        dogId: dogId
      }
    })
    res.json(dogsBookings)
  } catch (error) {
    next(error)
  }
})
