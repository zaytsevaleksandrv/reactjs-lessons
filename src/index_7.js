import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore,  { history } from "./redux/stores/configureStore";
import App from "./components/App";
import { ConnectedRouter } from "connected-react-router";

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
