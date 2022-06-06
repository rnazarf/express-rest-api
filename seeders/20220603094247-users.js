'use strict';

const { hashPassword } = require('../libs/password');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [{
      name: 'Rifki Nazar Firdaus',
      email: 'rifkinazar24@gmail.com',
      password: await hashPassword('password'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ayu Lusiana',
      email: 'ayulusiana@gmail.com',
      password: await hashPassword('password'),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
