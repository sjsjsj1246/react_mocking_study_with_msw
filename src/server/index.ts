import { setupWorker } from "msw";
import authHandler from "./auth/handlers";
import todoHandler from "./todo/handlers";

export const serviceWorker = setupWorker(...todoHandler, ...authHandler);
