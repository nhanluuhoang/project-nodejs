require('dotenv').config()

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,

  /** DATABASE */
  database: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    dialect: process.env.DB_CONNECTION,

    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
      max: process.env.POOL_MAX,
      min: process.env.POOL_MIN,
      acquire: process.env.POOL_ACQUIRE,
      idle: process.env.POOL_IDLE
    }
  },

  /** AUTH KEY */
  auth: {
    secret: process.env.SEQUELIZE_AUTH_SECRET
  }
}
