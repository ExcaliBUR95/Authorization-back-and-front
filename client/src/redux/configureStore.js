import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { application } from "./features/application";
import { todos } from "./features/todos";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({
    application,
    todos,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
