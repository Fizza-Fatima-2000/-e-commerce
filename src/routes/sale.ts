import { Router } from "express";
import SaleController from "../controllers/sale.controller";

const router = Router();



router.post("/create", SaleController.createSale);
router.get("/get/filters", SaleController.getDataByFilter);
router.get("/get/revenue", SaleController.saleRevenue);



export default router;
