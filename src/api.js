const API_URL = "https://dummyjson.com";

export const getUsers = async () => {
    const respons = await fetch(`${API_URL}/users`);
    const {users} = await respons.json();
    return users;
};

export const getUserById = async (id) => {
    const respons = await fetch(`${API_URL}/users/${id}`);
    const data = await respons.json();
    return data;
};