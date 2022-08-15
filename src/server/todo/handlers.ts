import { rest } from "msw";
import { getTodoList } from "./service";

export default [rest.get("/api/todos", getTodoList)];
