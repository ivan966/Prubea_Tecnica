import Axios from "axios";

const API_URL = "http://localhost:3001";

export const getUsuarios = () => {
  return Axios.get(`${API_URL}/usuarios`);
};

export const createUser = (user) => {
  return Axios.post(`${API_URL}/create`, user);
};

export const updateUser = (user) => {
  return Axios.put(`${API_URL}/update`, user);
};

export const deleteUser = (id) => {
  return Axios.put(`${API_URL}/delete/${id}`);
};
