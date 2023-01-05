import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
    const { users, error, loading } = useTypedSelector((state) => state.users);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <h1>Users Page</h1>
            {users.map((user) => (
                <div key={user.id}>
                    {user.id} - {user.name}
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;
