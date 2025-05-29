import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";

class Category extends Model {
  // model definition
  public id!: string;
  public name!: string;
  public description!: string;
  public updatedAt!: Date;
  public createdAt!: Date;
}

Category.init(
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
    modelName: "Category",
    tableName: "Categories",
    timestamps: false,
    freezeTableName: true,
  }
);


export default Category;
