'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    createdAt :DataTypes.DATE,
    updatedAt : DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};