const USERS_KEY = 'users';

export const findUserByName = userName => {
	if (!userName) return undefined;
	const users = getUsers();
	if (!users || !users.length) return undefined;
	return users.find(u => u.name === userName);
};

export const getUsers = () => {
	const users = JSON.parse(window.localStorage.getItem(USERS_KEY));
	return users ? users : [];
};

export const setUsers = (users) => {
    window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const saveUser = (user) => {
    if(!user) return;
    const users = getUsers();
    users.push(user);
   setUsers(users);
};

export const deleteUser = (userId) => {
    if(!userId) return;
    const users = getUsers();
    setUsers(users.filter(_u => _u.id !== userId))
};

export const updateUser = (user) => {
    if(!user) return;
    const users = getUsers();
    setUsers(users.map(_u => _u.id === user.id ? user : _u))
};
