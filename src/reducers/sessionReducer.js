import uuid from 'uuid/v4';
import { sessionActionTypes } from '../modules/actionTypes';
const sessionModel = (user) => ({
	sessionId: uuid(),
	user
});

export default (session, action) => {
	switch (action.type) {
		case sessionActionTypes.CREATE_SESSION: {
			return action.user ? sessionModel(action.user) : {sessionId: null, user: null};
		}

		case sessionActionTypes.DELETE_SESSION: {
			return { sessionId: null, user: null};
		}

		case sessionActionTypes.UPDATE_CURRENT_USER_SESSION: {
			return { ...session, user: action.user};
		}

		default: {
			return session;
		}
	}
};
