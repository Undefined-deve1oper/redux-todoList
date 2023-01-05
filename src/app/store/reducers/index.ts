import { combineReducers } from "redux";
import todosReducers from "./todosReducers";

export const rootReducers = combineReducers({
    todos: todosReducers
});

export type RootState = ReturnType<typeof rootReducers>;
