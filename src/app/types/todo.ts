export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoState {
    todos: ITodo[];
    loading: boolean;
    error: string | null;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: ITodo[];
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction =
    | FetchTodoAction
    | FetchTodoErrorAction
    | FetchTodoSuccessAction
    | SetTodoPage;
