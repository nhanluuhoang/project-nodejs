const langValidation = require('../public/lang/errors')

/**
* Translate Error Message
* @param {string} errMsg
* return {Array<string>} error message
*/
const translateErrorMessages = (errMsg) => {
  for (const [key, value] of Object.entries(langValidation[process.env.LOCATION])) {
    if (key === errMsg) {
      return value
    }
  }
}

module.exports = { translateErrorMessages }
