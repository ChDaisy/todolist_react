import axios from "axios";

const API_URL = "http://localhost:8080/api/todos";

export const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getTodosByDate = async (date) => {
  const formattedDate = date.toLocaleDateString("en-CA"); // 'YYYY-MM-DD' 형식으로 포맷
  const response = await axios.get(`${API_URL}/date`, {
    params: { date: formattedDate },
  });
  return response.data;
};

export const createTodo = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

export const updateTodo = async (id, todo) => {
  const response = await axios.put(`${API_URL}/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
