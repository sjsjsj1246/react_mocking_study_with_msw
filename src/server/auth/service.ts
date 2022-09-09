import { rest } from "msw";

export const check: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(500),
    ctx.json({
      id: "123123",
      username: "sjsjsj1246",
    })
  );
};

export const signup: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(500),
    ctx.json({
      id: "123123",
      username: "sjsjsj1246",
    })
  );
};

export const login: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(500),
    ctx.json({
      id: "123123",
      username: "sjsjsj1246",
    })
  );
};

export const logout: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(ctx.status(200), ctx.delay(500), ctx.json(null));
};
