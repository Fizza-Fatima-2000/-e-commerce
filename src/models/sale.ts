import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";

class Sale extends Model {
  // model definition
  public id!: string;
  public quantity!: number;
  public sale_price!: number;
  public sale_date!: Date;
  public platform!: number;
  public updatedAt!: Date;
  public createdAt!: Date;
}

Sale.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },   
    sale_price: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
    sale_date: {
        type: new DataTypes.DATE,
        allowNull: true,
      },
      product_id: {
        type: new DataTypes.INTEGER,
        allowNull: true,
      },
      platform: {
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
    modelName: "Sale",
    tableName: "Sales",
    timestamps: false,
    freezeTableName: true,
  }
);


export default Sale;
