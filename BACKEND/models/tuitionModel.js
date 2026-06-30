import db from "../config/database.js";

export const getFees = async () => {
  return await db.selectFrom("fees").selectAll().execute();
};

export const getPaymentMethod = async () => {
  return await db.selectFrom("payment_method").selectAll().execute();
};
