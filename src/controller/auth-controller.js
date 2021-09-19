const userRepository = require('../repositories/user-repository')
const { translateErrorMessages } = require('../utilities/translate')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/**
 * AuthController:login
 * @param {Object} req request
 * @param {Object} res response
 */
const login = async (req, res) => {
  const { email, password } = req.body

  const user = await userRepository.findUserByEmail(email)
  const match = await bcrypt.compare(password, user.password)

  if (match) {
    const token = await jwt.sign(
      { data: email },
      process.env.SECRET,
      { expiresIn: process.env.EXPIRES_IN }
    )

    res.status(200).json({
      data: {
        email: email,
        token: token
      }
    })
  } else {
    res.status(404).json({
      message: translateErrorMessages('loginFailed')
    })
  }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const me = (req, res) => {
  res.status(200).json({
    data: {
      id: req.user.id,
      fullName: req.user.fullName,
      email: req.user.email,
      createdAt: req.user.createdAt,
      updatedAt: req.user.updatedAt
    }
  })
}

module.exports = { login, me }
