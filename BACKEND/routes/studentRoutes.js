import express from "express";
import {
  getAllStudents,
  getStudentsById,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/studentbyid/:student_id", getStudentsById);
router.post("/", addStudent);
router.put("/:student_id", updateStudent);
router.delete("/:student_id", deleteStudent);

export default router;
