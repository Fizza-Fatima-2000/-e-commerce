import { Router } from "express";
import InventoryController from "../controllers/inventory.controller";
import { adminAuth } from "../middlewares/adminAuth";

const router = Router();



router.post("/create", adminAuth,InventoryController.createInventory);
router.get("/getById",adminAuth, InventoryController.getbyId);
router.get("/getAll", adminAuth,InventoryController.getAll);
router.get("/get/low_threshold",adminAuth, InventoryController.getLow_threshold);



export default router;
