import { useReducer, useEffect } from 'react';

const useLocalStorageReducer = (reducer, initVal, key) => {
	const [state, dispatch] = useReducer(reducer,initVal, () => {
		let value;
		try {
			value = JSON.parse(window.localStorage.getItem(key) || String(initVal));
		} catch (error) {
			value = initVal;
		}
		return value;
    });
    
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [state, key]);

	return [state, dispatch];
};

export {useLocalStorageReducer};
