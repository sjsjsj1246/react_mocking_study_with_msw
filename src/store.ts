import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import rootReducer from "./modules";
import { batchedSubscribe } from "redux-batched-subscribe";
import { debounce } from "lodash";

const middlewares = [createLogger()];

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState")!)
  : {};

const debounceNotify = debounce((notify) => notify());

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: persistedState,
  enhancers: [batchedSubscribe(debounceNotify)],
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
