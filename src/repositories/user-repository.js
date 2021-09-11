const models = require('../models/index')

/**
 * Find user by email
 * @param {string} email
 * return model user
 */
const findUserByEmail = (email) => {
  return models.user.findOne({ where: { email: email } })
}

module.exports = { findUserByEmail }
