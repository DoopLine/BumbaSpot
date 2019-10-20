import uuid from 'uuid/v4';
import { sectionActionTypes } from './actionTypes';
// import listReducer from './listReducer';

const sessionModel = (userName) => ({
	sessionId: uuid(),
	userName,
});

export default (session, action) => {
	switch (action.type) {
		case sectionActionTypes.CREATE_SESSION: {
            const {userName} = action;
            console.log('criando sess');
			return userName ?  sessionModel(userName) : {};
		}

        
		case sectionActionTypes.DELETE_SESSION: {
			return {};
		}

		default: {
			return session;
		}
	}
};
