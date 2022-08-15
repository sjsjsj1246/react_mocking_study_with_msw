import { rest } from "msw";
import { check } from "./service";

export default [rest.get("/api/auth/check", check)];
