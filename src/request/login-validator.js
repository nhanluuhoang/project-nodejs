const { body } = require('express-validator')
const validate = require('./index')
const customEmailExist = require('./common/custom_email_exist.validatior')

/**
 * Validate request login
 * return {Array}
 */
module.exports = () => {
  return [
    validate([
      body('email')
        .isEmail().withMessage('email')
        .bail()
        .custom(customEmailExist),
      body('password')
        .isLength({ min: 6, max: 15 }).withMessage('password')
    ])
  ]
}
