import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import App from "App";
import { serviceWorker } from "server";
import store from "store";
import "index.css";

if (process.env.REACT_APP_PRODUCTION_MODE === "development") {
  serviceWorker.start({ onUnhandledRequest: "bypass" });
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
axios.defaults.baseURL = process.env.REACT_APP_PRODUCTION_MODE
  ? process.env.REACT_APP_PRODUCTION_API_URL
  : process.env.REACT_APP_DEVELOPMENT_API_URL;

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
