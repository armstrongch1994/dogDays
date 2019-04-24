'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Dog} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const dogs = await Promise.all([
    Dog.create({
      name: 'Bear',
      age: 4,
      gender: 'female',
      image: '../public/images/dogs/bear.jpg',
      size: 'small',
      weight: '30 lbs',
      notes: 'All Users must be 18 years or older. '
    }),
    Dog.create({
      name: 'Bella',
      age: 8,
      gender: 'female',
      image: '../public/images/dogs/bella.jpg',
      size: 'medium',
      weight: '60 lbs',
      notes:
        'All Users must be 18 years or older. Bella is of larger size and weight. She is also in the larger age range and has less energy.'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${dogs.length} dogs`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
