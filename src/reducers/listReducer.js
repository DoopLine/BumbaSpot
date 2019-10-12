import uuid from 'uuid/v4';
import cardReducer from './cardReducer';
const ListModel = (title, createble) => ({
	id: uuid(),
	title,
	createble,
	cards: [],
	isDone: false,
});

export const actionTypes = {
	CREATE: 'CREATE',
	EDIT: 'EDIT',
	REMOVE: 'REMOVE',
	MOVE_CARD: 'MOVE_CARD',
	MOVE_CARD_TO_CARD: 'MOVE_CARD_TO_CARD',
};

export default (lists, action) => {
	switch (action.type) {
		case actionTypes.CREATE: {
			return [...lists, ListModel(action.title, action.createble)];
		}

		case actionTypes.EDIT: {
			const { newTitle, newCreateble } = action;
			return lists.map(l =>
				l.id === action.id
					? { ...l, title: newTitle, createble: newCreateble }
					: l
			);
		}

		case actionTypes.REMOVE: {
			return lists.filter(l => l.id !== action.id);
		}

		case actionTypes.MOVE_CARD_TO_CARD: {
			const workingLists = [...lists];
			const workingFromList = workingLists[action.fromListIndex];
			const workingToList = workingLists[action.toListIndex];
			const dragged = workingFromList.cards[action.fromIndex];
			workingFromList.cards.splice(action.fromIndex, 1);
			workingToList.cards.splice(action.toIndex, 0, dragged);
			return workingLists;
		}

		case actionTypes.MOVE_CARD: {
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
			const ls = cardReducer(lists, action);
			return ls;
	
		}
	}
};
