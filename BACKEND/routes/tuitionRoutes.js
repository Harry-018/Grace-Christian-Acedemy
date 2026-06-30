import express from "express";

import {
  getFeesController,
  getPaymentMethodController,
} from "../controllers/tuitionController.js";

const router = express.Router();
router.get("/getfees", getFeesController);
router.get("/getpaymethod", getPaymentMethodController);

export default router;
