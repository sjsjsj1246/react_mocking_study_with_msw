import axios from "axios";
import { Todo } from "@modules/todo";

export const getTodoList = async () => (await axios.get<Todo[]>("/todos")).data;
export const getTodoById = async (id: number) =>
  (await axios.get<Todo>(`/todos/${id}`)).data;
export const createTodot = async (content: string) =>
  (await axios.post<Todo>("/todos", { content })).data;
export const editTodo = async (id: number, content: string) =>
  (await axios.patch<Todo>(`/todos/${id}`, { content })).data;
export const deleteTodo = async (id: number) =>
  (await axios.delete<null>(`/todos/${id}`)).data;
export const toggleTodo = async (id: number) =>
  (await axios.patch<Todo>(`/todos/complete/${id}`)).data;
