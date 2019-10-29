import { sessionActionTypes } from '../modules/actionTypes';
import sessionReducer from './sessionReducer';

describe('Create Session', () => {
	it('should create a new session', () => {
        const session = {};
        const newSession = sessionReducer(session, {
            type: sessionActionTypes.CREATE_SESSION,
            userName: 'Denilson',
        });
        
		expect(
            newSession.userName
		).toEqual('Denilson');
	});

	it('should return a empty object if dont have a userName', () => {
		const session = {};
		expect(
			sessionReducer(session, {
				type: sessionActionTypes.CREATE_SESSION,
			}).sessionId
		).toEqual(undefined);
	});
});

describe('When logout', () => {
	it('should logout the session, returning a empty object', () => {
		const session = {};
		expect(
			sessionReducer(session, {
				type: sessionActionTypes.DELETE_SESSION,
			})
		).toEqual({});
	});
});
