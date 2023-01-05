import axios from "axios";
import { Dispatch } from "redux";
import { ITodo, TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = () => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({ type: TodoActionTypes.FETCH_TODOS });
        const response = await axios.get<ITodo[]>(
            "https://jsonplaceholder.typicode.com/todos"
        );
        dispatch({
            type: TodoActionTypes.FETCH_TODOS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: TodoActionTypes.FETCH_TODOS_ERROR,
            payload: "Произошла ошибка при загрузке списка задач"
        });
    }
};
