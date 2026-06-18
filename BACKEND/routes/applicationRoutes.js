import express from "express";
import {
  getAllApplicants,
  getRecentApplicants,
} from "../controllers/applicationController.js";

const router = express.Router();
router.get("/", getAllApplicants);
router.get("/recentApplicants", getRecentApplicants);

export default router;
