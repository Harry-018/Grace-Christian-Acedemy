import db from "../config/database.js";

export const getLocations = async () => {
  return await db.selectFrom("transportation").selectAll().execute();
};
