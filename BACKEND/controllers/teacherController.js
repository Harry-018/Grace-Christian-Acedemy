import * as TeacherModel from "../models/teacherModels.js";

//get all teacher
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await TeacherModel.getAllTeachers();

    res.json(teachers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//get teacher by id
export const getTeacherById = async (req, res) => {
  const teacher_id = req.params.teacher_id;
  try {
    const teachers = await TeacherModel.getTeacherById(teacher_id);

    res.json(teachers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//create teachers
export const addTeacher = async (req, res) => {
  try {
    await TeacherModel.createTeacher(req.body);

    res.status(201).json({
      message: "Teacher created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//update teachers
export const updateteacher = async (req, res) => {
  try {
    const { teacher_id } = req.params;
    const teacherdata = req.body;
    await TeacherModel.updateTeacher(teacher_id, teacherdata);

    res.status(201).json({
      message: "Teacher updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//delete teacher
export const deleteTeacher = async (req, res) => {
  try {
    const { teacher_id } = req.params;

    await TeacherModel.deleteTeacher(teacher_id);

    res.status(200).json({
      message: "Teacher deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
