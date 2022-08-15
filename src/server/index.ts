import { setupWorker } from "msw";
import { auth } from "./auth";
import { todo } from "./todo";

export const serviceWorker = setupWorker(...todo, ...auth);
