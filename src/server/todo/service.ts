import { rest } from "msw";
import data from "./data";

export const getTodoList: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(100), ctx.json(data));
};

export const getTodo: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(100),
    ctx.json(data.find((todo) => todo.id === req.params.id))
  );
};

export const createTodo: Parameters<typeof rest.post>[1] = async (
  req,
  res,
  ctx
) => {
  const { content } = await req.json();
  const newTodo = {
    id: String(data.length + 1),
    content,
    isCompleted: false,
    publishedDate: new Date().toISOString(),
  };
  data.push(newTodo);
  return res(ctx.status(201), ctx.delay(100), ctx.json(newTodo));
};

export const deleteTodo: Parameters<typeof rest.delete>[1] = (
  req,
  res,
  ctx
) => {
  const index = data.findIndex((todo) => todo.id === req.params.id);
  data.splice(index, 1);
  return res(ctx.status(204), ctx.delay(100));
};

export const updateTodo: Parameters<typeof rest.patch>[1] = async (
  req,
  res,
  ctx
) => {
  const index = data.findIndex((todo) => todo.id === req.params.id);
  const { content } = await req.json();
  data[index].content = content;
  return res(ctx.status(200), ctx.delay(100), ctx.json(data[index]));
};

export const toggleTodo: Parameters<typeof rest.patch>[1] = (req, res, ctx) => {
  const index = data.findIndex((todo) => todo.id === req.params.id);
  data[index].isCompleted = !data[index].isCompleted;
  return res(ctx.status(200), ctx.delay(100), ctx.json(data[index]));
};
