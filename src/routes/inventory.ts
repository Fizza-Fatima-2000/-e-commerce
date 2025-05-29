import { Router } from "express";
import InventoryController from "../controllers/inventory.controller";

const router = Router();



router.post("/create", InventoryController.createInventory);
router.get("/getById", InventoryController.getbyId);
router.get("/getAll", InventoryController.getAll);
router.get("/get/low_threshold", InventoryController.getLow_threshold);



export default router;
