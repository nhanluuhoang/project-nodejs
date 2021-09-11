const config = require('../config/config.js')
const { Sequelize, DataTypes, Op } = require('sequelize')

const sequelize = new Sequelize(
  config.database.DB_DATABASE,
  config.database.DB_USERNAME,
  config.database.DB_PASSWORD,
  {
    host: config.database.DB_HOST,
    port: config.database.DB_PORT,
    dialect: config.database.dialect,
    operatorsAliases: 1,

    poll: {
      max: config.database.pool.max,
      min: config.database.pool.min,
      acquire: config.database.pool.acquire,
      idle: config.database.pool.idle
    }
  }
)

const db = {}

db.Sequelize = Sequelize
db.Op = Op
db.sequelize = sequelize

/** Add model when creating new here */
db.user = require('./users')(sequelize, Sequelize, DataTypes)

module.exports = db
