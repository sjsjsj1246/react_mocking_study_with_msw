import { ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter } from "react-router-dom";

const AllTheProviders = ({ children }: { children: any }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options }) as RenderResult;

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
