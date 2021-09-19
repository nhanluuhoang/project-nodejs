const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const languageMiddleware = require('./src/middleware/languages-middleware')
const authMiddleware = require('./src/middleware/auth-middleware')

/*
* Router View
*/
const indexRouter = require('./src/routes/web-router')

/*
* Router Api
*/
const apiRouter = require('./src/routes/api-router')

const app = express()

/*
* View engine setup
*/
app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/*
* Middleware language
*/
app.use(languageMiddleware)
app.use(authMiddleware)

/*
* View initial
*/
app.use('/', indexRouter)

/*
* Api initial
*/
app.use('/api', apiRouter)

/*
* Catch 404 and forward to error handler
*/
app.use(function (req, res, next) {
  next(createError(404))
})

/*
* Error handler
*/
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
