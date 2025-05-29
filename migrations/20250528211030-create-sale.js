'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // product_id: {
      //   type: Sequelize.INTEGER
      // },
      quantity: {
        type: Sequelize.INTEGER
      },
      sale_price: {
        type: Sequelize.INTEGER
      },
      sale_date: {
        type: Sequelize.DATE
      },
      platform: {
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


    await queryInterface.addColumn("Sales", "product_id", {
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
    await queryInterface.dropTable('Sales');
  }
};