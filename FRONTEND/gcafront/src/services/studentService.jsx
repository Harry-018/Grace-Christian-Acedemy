import axios from "axios";

const API_URL = "http://localhost:5000/students";

export const getStudents = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

export const getStudentsById = async (student_id) => {
  const response = await axios.get(`${API_URL}/studentbyid/${student_id}`);
  return response.data;
};

export const addStudent = async (studentData) => {
  const response = await axios.post(API_URL, studentData);

  return response.data;
};

export const modifyStudent = async (studentData) => {
  const { student_id, ...dataToSend } = studentData;

  const response = await axios.put(`${API_URL}/${student_id}`, dataToSend);
  return response.data;
};

export const removeStudent = async (student_id) => {
  const response = await axios.delete(`${API_URL}/${student_id}`);
  return response.data;
};
