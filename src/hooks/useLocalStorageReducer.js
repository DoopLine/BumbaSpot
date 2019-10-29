import { useReducer, useEffect } from 'react';
import { updateUser } from "../modules/storage";

const useLocalStorageReducer = (reducer, initVal, key) => {
	const [state, dispatch] = useReducer(reducer, initVal, () => {
		let value;
		try {
			value = JSON.parse(window.localStorage.getItem(key) || String(initVal));
		} catch (error) {
			value = initVal;
		}
		return value;
	});
	
	useEffect(() => {
		updateUser(state.user);
		window.localStorage.setItem(key, JSON.stringify(state));
		console.log('localstorage normal set ' + key);
		// eslint-disable-next-line
	}, [state]);

	return [state, dispatch];
};

export { useLocalStorageReducer };
