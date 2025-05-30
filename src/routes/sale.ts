import { Router } from "express";
import SaleController from "../controllers/sale.controller";
import { adminAuth } from "../middlewares/adminAuth";

const router = Router();



router.post("/create",adminAuth, SaleController.createSale);
router.get("/get/filters", adminAuth,SaleController.getDataByFilter);
router.get("/get/revenue", adminAuth,SaleController.saleRevenue);



export default router;
