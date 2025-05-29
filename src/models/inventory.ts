import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import Product from "./product";

class Inventory extends Model {
  // model definition
  public id!: string;
  public stock!: number;
  public low_stock_threshold!: number;
  public product_id!: number;
  public updatedAt!: Date;
  public createdAt!: Date;
}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },   
    low_stock_threshold: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
   
      product_id: {
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
    modelName: "Inventory",
    tableName: "Inventories",
    timestamps: false,
    freezeTableName: true,
  }
);

Inventory.belongsTo(Product, { foreignKey: "product_id" });

export default Inventory;
