'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inventory.init({
    product_id: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    low_stock_threshold: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};