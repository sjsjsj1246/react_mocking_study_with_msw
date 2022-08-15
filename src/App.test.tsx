import { render } from "./test";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("render App wuthout crash", () => {
  render(<App />);
});
