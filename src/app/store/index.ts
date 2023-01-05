import { rootReducers } from "./reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export const store = createStore(rootReducers, applyMiddleware(thunk));
