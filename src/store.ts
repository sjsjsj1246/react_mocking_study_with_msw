import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { batchedSubscribe } from "redux-batched-subscribe";
import { debounce } from "lodash";
import todo from "./modules/todo";
import auth from "./modules/auth";
import { useDispatch } from "react-redux";

const middlewares = [createLogger()];

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState")!)
  : {};

const debounceNotify = debounce((notify) => notify());

const store = configureStore({
  reducer: {
    todo,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: persistedState,
  enhancers: [batchedSubscribe(debounceNotify)],
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
