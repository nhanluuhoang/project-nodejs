const express = require('express')
const validator = require('../request/login-validator')
const LoginController = require('../controller/auth-controller')
const MeController = require('../controller/auth-controller')

const router = express.Router()

/**
* Router Api
* @param {string} /login endpoint
* @param {function(string)} validator('login') validate request
* @param {function(req, res)} LoginController.login controller
*/
router.post('/login', validator('login'), LoginController.login)
router.get('/me', MeController.me)

module.exports = router
