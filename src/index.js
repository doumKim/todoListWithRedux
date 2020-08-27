import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducers);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
