import React, { createContext } from 'react';
import sessionReducer from '../reducers/sessionReducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

export const SessionContext = createContext();

export function SessionProvider(props) {
	const [session, dispatch] = useLocalStorageReducer(
		sessionReducer,
		{ sessionId: null, user: null},
		'session'
	);

	return (
		<SessionContext.Provider value={{ session, dispatch }}>
			{props.children}
		</SessionContext.Provider>
	);
}
