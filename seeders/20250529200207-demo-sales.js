'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sales', [
      { product_id: 1, quantity: 2, sale_price: 699.99, sale_date: new Date(), platform: 1, createdAt: new Date(), updatedAt: new Date() },
      { product_id: 2, quantity: 1, sale_price: 299.99, sale_date: new Date(), platform: 2, createdAt: new Date(), updatedAt: new Date() },
      { product_id: 3, quantity: 5, sale_price: 19.99, sale_date: new Date(), platform: 1, createdAt: new Date(), updatedAt: new Date() },
      { product_id: 4, quantity: 3, sale_price: 15.99, sale_date: new Date(), platform: 2, createdAt: new Date(), updatedAt: new Date() },
      { product_id: 5, quantity: 4, sale_price: 49.99, sale_date: new Date(), platform: 1, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sales', null, {});
  }
};
