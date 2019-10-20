import React, { createContext } from 'react';
import UserReducer from '../reducers/userReducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

export const UserContext = createContext();

export function UserProvider(props) {
	const [users, dispatch] = useLocalStorageReducer(
		UserReducer,
		[],
		'users'
	);

	return (
		<UserContext.Provider value={{ users, dispatch }}>
			{props.children}
		</UserContext.Provider>
	);
}
