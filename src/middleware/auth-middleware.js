const jwt = require('jsonwebtoken')
const userRepository = require('../repositories/user-repository')

const authMiddleware = async (req, res, next) => {
  if (req.originalUrl === '/api/login') {
    next()
  }

  const token = req.header('Authorization').replace('Bearer ', '')
  const data = jwt.verify(token, process.env.SECRET)

  try {
    const user = await userRepository.findUserByEmail(data.data)

    if (!user) {
      throw new Error()
    }

    req.user = user
    req.token = token

    next()
  } catch {
    res.status(401).send({ error: 'Not authorized to access this resource' })
  }
}

module.exports = authMiddleware
