const { Sequelize, DataTypes, Op } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    operatorsAliases: 1,

    poll: {
      max: process.env.POOL_MAX,
      min: process.env.POOL_MIN,
      acquire: process.env.POOL_ACQUIRE,
      idle: process.env.POOL_IDLE
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
