import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { StartPage } from "./StartPage";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<StartPage />} />
      {/* <Route path="/login" element={LoginPage} />
      <Route path="/signup" element={SignupPage} />
      <Route path="/todo" element={TodoPage} /> */}
    </ReactRouterRoutes>
  );
};
