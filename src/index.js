import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components";

import { Provider } from "react-redux";
import { store } from "./redux/store";

// finally we import & bind store + middleware + reducers into application through redux Provider context
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
