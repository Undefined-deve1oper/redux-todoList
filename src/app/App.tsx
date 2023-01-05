import React from "react";
import TodoList from "./components/TodoList";
import UserList from "./components/UsersList";

const App: React.FC = () => {
    return (
        <div>
            <h1>React TodoList</h1>
            <UserList />
            <hr />
            <TodoList />
        </div>
    );
};

export default App;
