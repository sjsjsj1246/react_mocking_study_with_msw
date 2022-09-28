import { rest } from "msw";
import * as todoService from "./service";

const todoHandler = [
  rest.get("/api/todos", todoService.getTodoList),
  rest.get("/api/todos/:id", todoService.getTodo),
  rest.post("/api/todos/:id", todoService.createTodo),
  rest.patch("/api/todos/:id", todoService.updateTodo),
  rest.delete("/api/todos/:id", todoService.deleteTodo),
  rest.patch("/api/todos/complete/:id", todoService.toggleTodo),
];

export default todoHandler;
