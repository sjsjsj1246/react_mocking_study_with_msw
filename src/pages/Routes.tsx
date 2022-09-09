import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import LoginPage from "./LoginPage";
import TodoPage from "./TodoPage";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route index element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </ReactRouterRoutes>
  );
};
