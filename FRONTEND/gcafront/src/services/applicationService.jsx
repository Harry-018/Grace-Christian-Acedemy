import axios from "axios";

const API_URL = "http://localhost:5000/applications";

export const getAllApplicants = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

export const getRecentApplicants = async () => {
  const response = await axios.get(`${API_URL}/recentApplicants`);

  return response.data;
};
