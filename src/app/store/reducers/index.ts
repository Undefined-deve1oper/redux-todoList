import { combineReducers } from "redux";
import todosReducers from "./todosReducers";
import usersReducers from "./usersReducer";

export const rootReducers = combineReducers({
    todos: todosReducers,
    users: usersReducers
});

export type RootState = ReturnType<typeof rootReducers>;
