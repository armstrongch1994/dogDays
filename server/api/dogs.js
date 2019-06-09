const router = require('express').Router()
const {Dog} = require('../db/models')
const whatDog = require('what-dog')
module.exports = router
function parse(object) {
  let newObj = {}
  if (object.personality !== '') {
    newObj.personality = object.personality
  }
  if (object.size !== '') {
    newObj.size = object.size
  }
  if (object.gender !== '') {
    newObj.gender = object.gender
  }
  return newObj
}
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
    // let category = req.body.category
    // console.log('category', category)
    // let categoryType = req.body.categoryType
    console.log('REQ.BODY', req.body)

    let parsedObject = parse(req.body)
    console.log('PARSED OBJECT', parsedObject)
    // let personality = req.body.personality
    // let size = req.body.size
    // let gender = req.body.gender
    // if (personality === '') {
    //   personality = ['lazy', 'energetic', 'mild', 'wild']
    // }
    let filteredDogs = await Dog.findAll({
      where: parsedObject
    })
    console.log('FILTEREDDOGS', filteredDogs)
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
