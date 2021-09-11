'use strict'
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < 10; i++) {
      await queryInterface.bulkInsert('Users', [{
        fullName: `user ${i}`,
        email: `example${i}@example.com`,
        password: bcrypt.hashSync('password', parseInt(process.env.SALT_ROUNDS)),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
    }
  },
  // password: bcrypt.hashSync(process.env.PLAINTEXTPASSWORD, process.env.SALTROUNDS),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
