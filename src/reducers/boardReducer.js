import uuid from 'uuid/v4';
import { boardActionTypes } from './actionTypes';
// import listReducer from './listReducer';

const BoardModel = title => ({
	id: uuid(),
	title,
	owner: 'User Name',
	group: 0,
});

export default (boards, action) => {
	switch (action.type) {
		case boardActionTypes.CREATE_BOARD: {
			return [...boards, BoardModel(action.title)];
		}

		case boardActionTypes.EDIT_BOARD: {
			const { newTitle } = action;
			return boards.map(b =>
				b.id === action.boardId ? { ...b, title: newTitle } : b
			);
		}

		case boardActionTypes.REMOVE_BOARD: {
			return boards.filter(b => b.id !== action.boardId);
		}

		default: {
			return boards;
		}
	}
};
