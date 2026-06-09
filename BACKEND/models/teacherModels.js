import db from "../config/database.js";

//get all teachers
export const getAllTeachers = async () => {
  return await db.selectFrom("teachers").selectAll().execute();
};

//get teacher by id
export const getTeacherById = async (teacher_id) => {
  return await db
    .selectFrom("teachers")
    .where("teacher_id", "=", teacher_id)
    .selectAll()
    .executeTakeFirst();
};

//create teacher
export const createTeacher = async (teacherData) => {
  return await db.insertInto("teachers").values(teacherData).execute();
};

//update teacher
export const updateTeacher = async (teacher_id, teacherData) => {
  return await db
    .updateTable("teachers")
    .set(teacherData)
    .where("teacher_id", "=", teacher_id)
    .execute();
};

//delete teacher
export const deleteTeacher = async (teacher_id) => {
  return await db
    .deleteFrom("teachers")
    .where("teacher_id", "=", teacher_id)
    .executeTakeFirst();
};
