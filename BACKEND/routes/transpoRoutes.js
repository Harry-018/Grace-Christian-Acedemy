import express from "express";

import { getLocationsController } from "../controllers/transpoController.js";

const router = express.Router();
router.get("/transpo", getLocationsController);

export default router;
