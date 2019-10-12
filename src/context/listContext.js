import React, { createContext } from 'react';
import listReducer from '../reducers/listReducer';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';

export const ListContext = createContext();

export function ListProvider(props) {
	const [lists, dispatch] = useLocalStorageReducer(listReducer, [], "lists");
	return (
		<ListContext.Provider value={{ lists, dispatch }}>
			{props.children}
		</ListContext.Provider>
	);
}
