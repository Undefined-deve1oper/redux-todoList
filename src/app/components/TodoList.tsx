import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
    const dispatch = useDispatch();
    const { todos, error, loading } = useTypedSelector((state) => state.todos);

    useEffect(() => {
        console.log(todos, error, loading);
    }, []);

    return <div>TodoList</div>;
};

export default TodoList;
