import axios from "axios";
import { Todo } from "../modules/todo";

export const getTodoList = async () => (await axios.get<Todo[]>("/api/todos")).data;
export const getTodoById = async (id: number) => (await axios.get<Todo>(`/api/todos/${id}`)).data;
export const createTodot = async (content: string) =>
  (await axios.post<Todo>("/api/todos", { content })).data;
export const editTodo = async (id: number) => (await axios.patch<Todo>(`/api/todos/${id}`)).data;
export const deleteTodo = async (id: number) => (await axios.delete<null>(`/api/todos/${id}`)).data;
