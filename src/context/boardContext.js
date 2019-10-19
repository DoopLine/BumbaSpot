import React, { createContext } from 'react';
import boardReducer from '../reducers/boardReducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

export const BoardContext = createContext();

export function BoardProvider(props) {
	const [boards, dispatch] = useLocalStorageReducer(boardReducer, [], 'boards');

	return (
		<BoardContext.Provider value={{ boards, dispatch }}>
			{props.children}
		</BoardContext.Provider>
	);
}
