import { useReducer, useEffect, useContext } from 'react';
import { sessionActionTypes } from '../reducers/actionTypes';
import { SessionContext } from '../context/sessionContext';

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

	const { session, dispatch: sessionDispatch } = useContext(SessionContext);

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
		console.log('localstorage set ' + key);
		if (session)
			try{
				sessionDispatch({
					type: sessionActionTypes.UPDATE_CURRENT_USER_SESSION,
					user: state.find(_s => _s.id === session.user.id),
				});
			}catch{
				console.log('fez signUp');
			}
		// eslint-disable-next-line
	}, [state]);

	return [state, dispatch];
};

export { useLocalStorageReducer };
