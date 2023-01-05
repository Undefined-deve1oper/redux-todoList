import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
    const { todos, page, limit, error, loading } = useTypedSelector(
        (state) => state.todos
    );
    const { fetchTodos, setTodoPage } = useActions();
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page, limit]);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <h1>Todos Page</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {todo.id} - {todo.title}
                </div>
            ))}
            <div style={{ display: "flex" }}>
                {pages.map((p, index) => (
                    <div
                        onClick={() => setTodoPage(p)}
                        key={index}
                        style={{
                            border:
                                p === page
                                    ? "2px solid green"
                                    : "1px solid gray",
                            padding: 10
                        }}
                    >
                        {p}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
