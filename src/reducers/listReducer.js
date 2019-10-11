import uuid from 'uuid/v4';

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
		case actionTypes.CREATE:
			return [...lists, ListModel(action.title, action.createble)];
		case actionTypes.EDIT:
			return lists.map(l =>
				l.id === action.id
					? { ...l, title: action.newTitle, createble: action.newCreateble }
					: l
			);
		case actionTypes.REMOVE:
			return lists.filter(l => l.id !== action.id);

		case actionTypes.MOVE_CARD_TO_CARD:
			const workingLists = [...lists];
			const workingFromList = workingLists[action.fromListIndex];
			const workingToList = workingLists[action.toListIndex];
			const dragged = workingFromList.cards[action.fromIndex];
			workingFromList.cards.splice(action.fromIndex, 1);
			workingToList.cards.splice(action.toIndex, 0, dragged);
			return workingLists;

		case actionTypes.MOVE_CARD:
			const workingLists1 = [...lists];
			const workingFromList1 = workingLists1[action.fromListIndex];
			const workingToList1 = workingLists1[action.toListIndex];
			const dragged1 = workingFromList1.cards[action.fromIndex];
			workingFromList1.cards.splice(action.fromIndex, 1);
			workingToList1.cards.push(dragged1);
			return workingLists1;
		default:
			console.log('error');
			return lists;
	}
};
