/**
 * Languages middleware
 * Get location
 * @param {Object} req
 * @param {Object} res
 * @param {any} next
 * NOTE: set default value location.
 */
module.exports = (req, res, next) => {
  if (req.acceptsLanguages().length > 0) {
    process.env.LOCATION = req.acceptsLanguages()[0]
  }

  next()
}
