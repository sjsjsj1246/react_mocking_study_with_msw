import axios from "axios";

export const getTodoList = async () => (await axios.get("/api/todos")).data;
export const getTodoById = async (id: number) => (await axios.get(`/api/todos/${id}`)).data;
export const createTodot = async (content: string) =>
  (await axios.post("/api/todos", { content })).data;
export const editTodo = async (id: number) => (await axios.patch(`/api/todos/${id}`)).data;
export const deleteTodo = async (id: number) => (await axios.delete(`/api/todos/${id}`)).data;
