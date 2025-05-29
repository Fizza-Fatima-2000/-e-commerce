'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Inventory', [
      { product_id: 1, stock: 10, low_stock_threshold: 5, createdAt: new Date(), updatedAt: new Date() },
      { product_id: 2, stock: 2, low_stock_threshold: 5, createdAt: new Date(), updatedAt: new Date() },
      { product_id: 3, stock: 15, low_stock_threshold: 10, createdAt: new Date(), updatedAt: new Date() },
      { product_id: 4, stock: 4, low_stock_threshold: 6, createdAt: new Date(), updatedAt: new Date() },
      { product_id: 5, stock: 1, low_stock_threshold: 3, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Inventory', null, {});
  }
};
