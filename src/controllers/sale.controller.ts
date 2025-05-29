import { NextFunction, Request, Response } from "express";
import SaleRepository from "../repositories/sale.repository";
import successHandler from "../utils/SuccessHandler";
import ErrorHandler from "../utils/ErrorHandler";
import Sale from "../models/sale";
import { col, fn, literal, Op, QueryTypes } from "sequelize";
import moment from "moment";
import sequelize from "sequelize";
// import { DATE } from "sequelize";

export class SaleController {
  async createSale(req: Request, res: Response, next: NextFunction) {
    try {
      let sale: Sale;
      const data = req.body;
      const createddata: any = {
        quantity: data.quantity,
        sale_price: data.sale_price,
        sale_date: new Date(),
        platform: data.platform,
        product_id: data.product_id,
      };
      sale = await SaleRepository.create(createddata);

      successHandler(res, 201, undefined, "Sale created successfully");
    } catch (error: any) {
      console.log(error);
      return next(new ErrorHandler(error, 500));
    }
  }

  async getDataByFilter(req: Request, res: Response, next: NextFunction) {
    try {
      const { start_date, end_date, product_id, platform } = req.query;

      const whereClause: any = {};
      if (start_date && end_date) {
        whereClause.sale_date = {
          [Op.between]: [
            new Date(start_date as string),
            new Date(end_date as string),
          ],
        };
      } else if (start_date) {
        whereClause.sale_date = {
          [Op.gte]: new Date(start_date as string),
        };
      } else if (end_date) {
        whereClause.sale_date = {
          [Op.lte]: new Date(end_date as string),
        };
      }
      if (product_id) {
        whereClause.product_id = product_id;
      }

      if (platform) {
        whereClause.platform = platform;
      }

      const sales = await Sale.findAll({
        where: whereClause,
        order: [["sale_date", "DESC"]],
      });

      successHandler(res, 201, sales, "Sales List ");
    } catch (error: any) {
      return next(new ErrorHandler(error, 500));
    }
  }

  async saleRevenue(req: Request, res: Response, next: NextFunction) {
    try {
        const { period } = req.query;
    
        if (!["daily", "weekly", "monthly", "yearly"].includes(period as string)) {
          return res.status(400).json({ message: "Invalid period. Use daily, weekly, monthly or yearly." });
        }
    
        const periodUnitMap: any = {
            daily: "day",
            weekly: "week",
            monthly: "month",
            yearly: "year",
          };
          
          const unit = periodUnitMap[period as string];
          if (!unit) {
            return res.status(400).json({ success: false, message: "Invalid period value" });
          }
          
          const endDate = moment().endOf("day");
          const startDate = moment().subtract(1, unit).startOf("day");
        const sales = await Sale.findAll({
          attributes: [
            [literal("SUM(quantity * sale_price)"), "total_revenue"]
          ],
          where: {
            sale_date: {
              [Op.between]: [startDate.toDate(), endDate.toDate()],
            },
          },
          raw: true,
        });
    
        res.status(200).json({
          period,
          from: startDate.format("YYYY-MM-DD"),
          to: endDate.format("YYYY-MM-DD"),
          ...sales[0],
        });
      } catch (error:any) {
        return next(new ErrorHandler(error, 500));
    }
    
  }
}

export default new SaleController();