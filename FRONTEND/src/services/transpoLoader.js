import API from "../api/API.js";

export const transpoLoader = async () => {
  try {
    const res = await API.get("/transpo");
    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("Backend Database Error Data:", error.response.data);
    }
    throw error;
  }
};
