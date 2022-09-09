import { rest } from "msw";

export const getTodoList: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(500),
    ctx.json([
      {
        id: "1",
        content: "테스트",
        isCompleted: false,
        publishedDate: "2022-08-12T11:47:34.799Z",
      },
      {
        id: "2",
        content: "테스트2",
        isCompleted: true,
        publishedDate: "2022-08-12T14:49:38.319Z",
      },
      {
        id: "3",
        content: "테스트3",
        isCompleted: false,
        publishedDate: "2022-08-12T14:49:43.149Z",
      },
    ])
  );
};

export const getTodo: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(500),
    ctx.json({
      id: req.params.id,
      content: "테스트",
      isCompleted: false,
      publishedDate: "2022-08-12T11:47:34.799Z",
    })
  );
};

export const createTodo: Parameters<typeof rest.post>[1] = (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(500), ctx.json(null));
};

export const deleteTodo: Parameters<typeof rest.delete>[1] = (
  req,
  res,
  ctx
) => {
  return res(ctx.status(200), ctx.delay(500), ctx.json(null));
};

export const updateTodo: Parameters<typeof rest.patch>[1] = (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(500), ctx.json(null));
};

export const toggleTodo: Parameters<typeof rest.patch>[1] = (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(500), ctx.json(null));
};
