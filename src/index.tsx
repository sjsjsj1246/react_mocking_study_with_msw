import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import App from "App";
import { serviceWorker } from "server";
import store from "store";
import "index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

serviceWorker.start({ onUnhandledRequest: "bypass" });
axios.defaults.baseURL = "/api";

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
