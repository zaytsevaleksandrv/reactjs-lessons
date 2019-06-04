import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import roster from "./roster";

export default history =>
  combineReducers({
    router: connectRouter(history),
    roster
  });
