import db from "../config/database.js";

//get all applicant
export const getAllApplicants = async () => {
  return await db.selectFrom("applicants").selectAll().execute();
};

//get first 5 applicants
export const getRecentApplicants = async () => {
  return await db.selectFrom("applicants").selectAll().limit(10).execute();
};
