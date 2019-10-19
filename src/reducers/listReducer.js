import uuid from 'uuid/v4';
import cardReducer from './cardReducer';
import { listActionTypes } from './actionTypes';
const ListModel = (title, createble, boardId) => ({
	id: uuid(),
	boardId,
	title,
	cards: [],
	createble,
	isDone: false,
});

// const updateBoards = (boards, currId, newLists) => {
// 	return boards.map(b => (b.id === currId ? { ...b, lists: newLists } : b));
// };

export default (lists, action) => {
	switch (action.type) {
		case listActionTypes.CREATE_LIST: {
			const {title, createble, boardId} = action;
			return [...lists, ListModel(title, createble, boardId)];
		}

		case listActionTypes.EDIT_LIST: {
			const { newTitle, newCreateble } = action;
			return lists.map(l =>
				l.id === action.listId
					? { ...l, title: newTitle, createble: newCreateble }
					: l
			);
		}

		case listActionTypes.REMOVE_LIST: {
			return lists.filter(l => l.id !== action.listId);
		}

		case listActionTypes.MOVE_CARD_TO_CARD: {
			const workingLists = [...lists];
			const workingFromList = workingLists[action.fromListIndex];
			const workingToList = workingLists[action.toListIndex];
			const dragged = workingFromList.cards[action.fromIndex];
			workingFromList.cards.splice(action.fromIndex, 1);
			workingToList.cards.splice(action.toIndex, 0, dragged);
			return workingLists;
		}

		case listActionTypes.MOVE_CARD: {
			// debugger;
			const workingLists = [...lists];
			const workingFromList = workingLists[action.fromListIndex];
			const workingToList = workingLists[action.toListIndex];
			const dragged = workingFromList.cards[action.fromIndex];
			workingFromList.cards.splice(action.fromIndex, 1);
			workingToList.cards.push(dragged);
			return workingLists;
		}

		default: {
			return cardReducer(lists, action);
		}
	}
};
