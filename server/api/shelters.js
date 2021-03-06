const router = require('express').Router()
const {Dog} = require('../db/models')
module.exports = router

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
