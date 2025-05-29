'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    role: DataTypes.INTEGER,
    createdAt :DataTypes.DATE,
    updatedAt : DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
  });
  return User;
};