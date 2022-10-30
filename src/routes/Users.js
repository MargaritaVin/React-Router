import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api";

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect (() => {
        getUsers().then((data) => {
            setUsers(data);
            setLoading(false);
        });
    }, []);

    const handleShowUser = (userId) => () => {
        navigate(`/users/${userId}`);
    };

    if (isLoading) {
        return <p>Loading...</p>;
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>email</th>
                    <th>phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map(({id, firstName, lastName, email, phone}) => (
                    <tr key={id}>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td><button type="submit" onClick={handleShowUser(id)}>Show more</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};
export default Users;