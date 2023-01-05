import axios from "axios";
import { Dispatch } from "redux";
import { IUser, UserAction, UserActionTypes } from "../../types/user";

export const fetchTodos = () => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({ type: UserActionTypes.FETCH_USERS });
        const response = await axios.get<IUser[]>(
            "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({
            type: UserActionTypes.FETCH_USERS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: UserActionTypes.FETCH_USERS_ERROR,
            payload: "Произошла ошибка при загрузке списка задач"
        });
    }
};
