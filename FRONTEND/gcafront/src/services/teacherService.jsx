import axios from "axios";

const API_URL = "http://localhost:5000/teachers";

export const getTeachers = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

export const getTeachersById = async (teacher_id) => {
  const response = await axios.get(`${API_URL}/studentbyid/${teacher_id}`);
  return response.data;
};

export const addTeacher = async (teacherData) => {
  const response = await axios.post(API_URL, teacherData);

  return response.data;
};

export const modifyTeacher = async (teacherData) => {
  const { teacher_id, ...dataToSend } = teacherData;

  const response = await axios.put(`${API_URL}/${teacher_id}`, dataToSend);
  return response.data;
};

export const removeTeacher = async (teacher_id) => {
  const response = await axios.delete(`${API_URL}/${teacher_id}`);
  return response.data;
};
