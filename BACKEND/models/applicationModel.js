import db from "../config/database.js";

//get all applicant
export const getAllApplicants = async () => {
  return await db.selectFrom("applicants").selectAll().execute();
};

//confirm applicant
try {
  export const confirmApplicant = async (applicantation_id, applicantData) => {
    return await db.execute(
      sql`
      INSERT INTO submission (column1, column2, column3)
      DELETE FROM source_table
      OUTPUT deleted.column1, deleted.column2, deleted.column3
      WHERE condition_column = ${targetConditionValue};
    `,
    );
  };
} catch (error) {
  console.error("Failed to move data:", error);
}

//reject applicant
export const rejectApplicant = async (applicantation_id) => {
  return await db
    .deleteFrom("applicants")
    .where("applicantation_id", "=", applicantation_id)
    .executeTakeFirst();
};
