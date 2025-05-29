'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      { name: 'Smartphone', description: 'Latest model', category_id: 1, price: 699.99, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gaming Chair', description: 'Ergonomic chair', category_id: 4, price: 299.99, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Novel Book', description: 'Bestseller novel', category_id: 2, price: 19.99, createdAt: new Date(), updatedAt: new Date() },
      { name: 'T-Shirt', description: 'Cotton T-Shirt', category_id: 3, price: 15.99, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lego Set', description: 'Creative building blocks', category_id: 5, price: 49.99, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
