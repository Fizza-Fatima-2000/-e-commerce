import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";

class Product extends Model {
  // model definition
  public id!: string;
  public name!: string;
  public description!: string;
  public price!: number;
  public category_id!: boolean;
  public updatedAt!: Date;
  public createdAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },   
    description: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    price: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    category_id: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },


  },
  {
    sequelize,
    modelName: "Product",
    tableName: "Products",
    timestamps: false,
    freezeTableName: true,
  }
);


export default Product;
