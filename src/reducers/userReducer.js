import uuid from 'uuid/v4';
import { userActionTypes } from '../modules/actionTypes';
import { saveUser, deleteUser } from '../modules/storage';

const UserModel = (name, password) => ({
	id: uuid(),
	name,
	password,
	boards: [],
	lists: [],
});

export default (action) => {
	switch (action.type) {
		case userActionTypes.CREATE_USER: {
			const {name, password} = action;
			saveUser(UserModel(name, password));
			return;
		}

		case userActionTypes.REMOVE_USER: {
			deleteUser(action.userId);
			return;
		}

		default: {
			console.log('caio no default do users');
		}
	}
};
