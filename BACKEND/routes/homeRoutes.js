import express from "express";

import {
  getBannerController,
  getAcademicProgramsController,
  getMissionVisionController,
  getReasonsController,
  getChildrenActivityController,
} from "../controllers/homeController.js";

const router = express.Router();
router.get("/banner", getBannerController);
router.get("/academiccard", getAcademicProgramsController);
router.get("/missvis", getMissionVisionController);
router.get("/reasons", getReasonsController);
router.get("/childactivity", getChildrenActivityController);

export default router;
