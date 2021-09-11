const langValidation = require('../public/lang/validation')
const { validationResult } = require('express-validator')

/**
 * Validator
 * Check validation request
 * @param {Object} validations
 * return response with error message
 */
const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)))

    const errors = validationResult(req).formatWith(errorFormatter)
    if (errors.isEmpty()) {
      return next()
    }
    console.log(errors.array())
    res.status(400).json({ errors: translateMessages(errors.array(), req) })
  }
}

/**
 * Custom format response error message
 * @param {string} location
 * @param {string} msg
 * @param {string} param
 * @param {string} value
 * @param {string} nestedErrors
 * return {Array<string>} format response error message
 */
const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
  return {
    field: param,
    msg: msg
  }
}

/**
 * Translate messages
 * @param {Array<string>} errArr
 * @param {Object<any>} req
 * return {Array<string>} format response error message
 */
const translateMessages = (errArr, req) => {
  const lang = req.acceptsLanguages().length > 0 ? req.acceptsLanguages()[0] : process.env.LOCATION
  errArr.forEach((errObj, index) => {
    for (const [key, value] of Object.entries(langValidation[lang])) {
      if (key === errObj.msg) {
        errArr[index].msg = value
      }
    }
  })

  return errArr
}

module.exports = validate
