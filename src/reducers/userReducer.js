import uuid from 'uuid/v4';
import { userActionTypes } from './actionTypes';
// import listReducer from './listReducer';

const UserModel = (name, password) => ({
	id: uuid(),
	name,
	password,
});

export default (users, action) => {
	switch (action.type) {
		case userActionTypes.CREATE_USER: {
			const {name, password} = action;
			console.log('criando user');
			return [...users, UserModel(name, password)];
		}

		// case userActionTypes.EDIT_USER: {
		// 	const { newTitle } = action;
		// 	return users.map(b =>
		// 		b.id === action.userId ...b, title: newTitle } : b
		// 	);
		// }

		case userActionTypes.REMOVE_USER: {
			return users.filter(_u => _u.id !== action.userId);
		}

		default: {
			return users;
		}
	}
};
