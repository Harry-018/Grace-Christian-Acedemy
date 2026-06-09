import db from "../config/database.js";

//get all students
export const getAllStudents = async () => {
  return await db.selectFrom("students").selectAll().execute();
};

//get student by id
export const getStudentsById = async (student_id) => {
  return await db
    .selectFrom("students")
    .where("student_id", "=", student_id)
    .selectAll()
    .executeTakeFirst();
};

//create student
export const createStudent = async (studentData) => {
  return await db.insertInto("students").values(studentData).execute();
};

//update student
export const updateStudent = async (student_id, studentData) => {
  return await db
    .updateTable("students")
    .set(studentData)
    .where("student_id", "=", student_id)
    .execute();
};

//delete student
export const deleteStudent = async (student_id) => {
  return await db
    .deleteFrom("students")
    .where("student_id", "=", student_id)
    .executeTakeFirst();
};
