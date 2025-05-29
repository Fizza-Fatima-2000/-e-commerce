import { NextFunction, Request, Response } from "express";
import SaleRepository from "../repositories/sale.repository";
import successHandler from "../utils/SuccessHandler";
import ErrorHandler from "../utils/ErrorHandler";
import Inventory from "../models/inventory";
import moment from "moment";
import inventoryRepository from "../repositories/inventory.repository";
import { Op, Sequelize } from "sequelize";
import Product from "../models/product";

export class InventoryController {
  async createInventory(req: Request, res: Response, next: NextFunction) {
    try {
      let inventory: Inventory;
      const data = req.body;
      const createddata: any = {
        stock: data.stock,
        low_stock_threshold: data.low_stock_threshold,
        product_id: data.product_id,
      };
      inventory = await inventoryRepository.create(createddata);

      successHandler(res, 201, undefined, "Inventory created successfully");
    } catch (error: any) {
      console.log(error);
      return next(new ErrorHandler(error, 500));
    }
  }

  async getbyId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id }:any = req.query;
      const specInventory : any = await inventoryRepository.findById(id)

      successHandler(res, 201, specInventory, "inventory List ");
    } catch (error: any) {
      return next(new ErrorHandler(error, 500));
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const specInventory : any = await inventoryRepository.findAll()

      successHandler(res, 201, specInventory, "inventory List ");
    } catch (error: any) {
      return next(new ErrorHandler(error, 500));
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.query;
        const updateData = req.body;
        if (!id) {
          return res.status(400).json({ success: false, message: "Inventory ID is required" });
        }
    
        const inventoryItem = await inventoryRepository.findById(Number(id));
    
        if (!inventoryItem) {
          return res.status(404).json({ success: false, message: "Inventory item not found" });
        }
    
        await inventoryRepository.update(Number(id), updateData);
    
        return res.status(200).json({ success: true, message: "Inventory updated successfully" });
    } catch (error: any) {
      return next(new ErrorHandler(error, 500));
    }
  }



async getLow_threshold (req:Request, res:Response, next:NextFunction){
    try {
        const items = await Inventory.findAll({
          where: {
            stock: {
              [Op.lt]: Sequelize.col("low_stock_threshold"),
            },
          },
          include: [
            {
              model: Product,
            },
          ],
        });
    
        return res.status(200).json({
          success: true,
          data: items,
          message: "Low stock items fetched successfully",
        });
      } catch (error) {
        next(error);
      }
}

}

export default new InventoryController();