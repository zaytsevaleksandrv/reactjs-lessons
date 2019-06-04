import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers";

const logger = createLogger();
export const history = createBrowserHistory();

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  routerMiddleware(history),
  logger
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer(history), initialState);
}
