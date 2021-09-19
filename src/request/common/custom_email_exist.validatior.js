const userRepository = require('../../repositories/user-repository')

/**
 * Check email exist
 * @param {string} email
 * return error message
 */
const customEmailExist = (email) => {
  return userRepository.findUserByEmail(email).then(data => {
    if (!data) {
      throw new Error('emailExist')
    }
  })
}

module.exports = customEmailExist
