import { rest } from "msw";
import * as authService from "./service";

const authHandler = [
  rest.post("/api/auth/login", authService.login),
  rest.post("/api/auth/signup", authService.signup),
  rest.get("/api/auth/check", authService.check),
];

export default authHandler;
