import * as StudentModel from "../models/studentModels.js";

//get all student
export const getAllStudents = async (req, res) => {
  try {
    const students = await StudentModel.getAllStudents();

    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//get student by id
export const getStudentsById = async (req, res) => {
  const student_id = req.params.student_id;
  try {
    const students = await StudentModel.getStudentsById(student_id);

    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//create students
export const addStudent = async (req, res) => {
  try {
    await StudentModel.createStudent(req.body);

    res.status(201).json({
      message: "Student created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//update students
export const updateStudent = async (req, res) => {
  try {
    const { student_id } = req.params;
    const studentData = req.body;
    await StudentModel.updateStudent(student_id, studentData);

    res.status(201).json({
      message: "Student updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//delete student
export const deleteStudent = async (req, res) => {
  try {
    const { student_id } = req.params;

    await StudentModel.deleteStudent(student_id);

    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
