import React, { createContext } from 'react';
import cardReducer from '../reducers/cardReducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

export const CardContext = createContext();

export function CardProvider(props) {
	const [cards, dispatch] = useLocalStorageReducer(
		cardReducer,
		[],
		'cards'
	);

	return (
		<CardContext.Provider value={{ cards, dispatch }}>
			{props.children}
		</CardContext.Provider>
	);
}
