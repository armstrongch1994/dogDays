const User = require('./user')
const Dog = require('./dog')
const Booking = require('./booking')
const Subscriber = require('./subscriber')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Dog)
Dog.belongsTo(User)
Dog.hasMany(Booking)
Booking.belongsTo(Dog)

module.exports = {
  User,
  Dog,
  Booking,
  Subscriber
}
