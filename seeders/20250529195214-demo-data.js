'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      { name: 'Electronics', description: 'Gadgets & Devices', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Books', description: 'Printed & digital books', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Clothing', description: 'Men & Women fashion', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Furniture', description: 'Home & office furniture', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Toys', description: 'Kids toys and games', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
