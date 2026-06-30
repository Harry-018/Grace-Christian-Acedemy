import db from "../config/database.js";

export const getBanner = async () => {
  return await db.selectFrom("banner").selectAll().execute();
};

export const getAcademicPrograms = async () => {
  return await db.selectFrom("academic_programs").selectAll().execute();
};

export const getMissionVision = async () => {
  return await db.selectFrom("mission_vision").selectAll().execute();
};

export const getReasons = async () => {
  return await db.selectFrom("choose_us").selectAll().execute();
};

export const getChildrenActivity = async () => {
  return await db.selectFrom("children_activities").selectAll().execute();
};
