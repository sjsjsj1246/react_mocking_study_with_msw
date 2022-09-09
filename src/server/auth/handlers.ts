import { rest } from "msw";
import { check } from "./service";

const authHandler = [rest.get("/api/auth/check", check)];

export default authHandler;
