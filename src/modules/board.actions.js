import uuid from 'uuid/v4';
import { boardActionTypes } from '../modules/actionTypes';

const BoardModel = (title, owner) => ({
	id: uuid(),
	title,
	owner,
	group: 0,
});

export default action => {
	const { boards } = action;

	switch (action.type) {
		case boardActionTypes.CREATE_BOARD: {
			return [...boards, BoardModel(action.title, action.owner)];
		}

		case boardActionTypes.EDIT_BOARD: {
			const { newTitle } = action;
			return boards.map(b =>
				b.id === action.boardId ? { ...b, title: newTitle } : b
			);
		}

		case boardActionTypes.REMOVE_BOARD: {
			return boards.filter(b => b.id !== action.boardId)
		}

		default: {
			return undefined;
		}
	}
};
