'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // product_id: {
      //   type: Sequelize.INTEGER
      // },
      stock: {
        type: Sequelize.INTEGER
      },
      low_stock_threshold: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


    await queryInterface.addColumn("Inventories", "product_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Products", 
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Inventories');
  }
};