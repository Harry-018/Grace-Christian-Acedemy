import express from "express";

import {
  getAllTeachers,
  getTeacherById,
  addTeacher,
  updateteacher,
  deleteTeacher,
} from "../controllers/teacherController.js";

const router = express.Router();

router.get("/", getAllTeachers);
router.get("/teacherbyid/:teacher_id", getTeacherById);
router.post("/", addTeacher);
router.put("/:teacher_id", updateteacher);
router.delete("/:teacher_id", deleteTeacher);

export default router;
