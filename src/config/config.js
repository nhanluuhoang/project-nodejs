require('dotenv').config()

module.exports = {
  /** DATABASE */
  [process.env.NODE_ENV]: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_CONNECTION,
    dialectOptions: {
      bigNumberStrings: true
    }
  },

  /** AUTH KEY */
  auth: {
    secret: process.env.SEQUELIZE_AUTH_SECRET
  }
}
