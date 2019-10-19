import uuid from 'uuid/v4';
import { cardActionTypes } from './actionTypes';
const CardModel = (content) => ({
	id: uuid(),
	content,
	desc: '',
	labels: [],
	tasks: [],
	img: '',
}); 

const TaskModel = content => ({
	id: uuid(),
	content,
	isDone: false,
});

const LabelModel = (title, color) => ({
	id: uuid(),
	title,
	color,
});

const updateLists = (lists, currId, newCards) => {
	return lists.map(_l => (_l.id === currId ? { ..._l, cards: newCards } : _l));
};

export default (lists, action) => {
	let cards;
	try {
		cards = lists.find(_l => _l.id === action.listId).cards;
	} catch (error) {
		console.err('erro ao encontrar os cards', error);
		return lists;
	}

	switch (action.type) {
		case cardActionTypes.CREATE_CARD: {
			const {content, listId} = action;
			const newCards =  [...cards, CardModel(content)];
			return updateLists(lists, listId, newCards);
		}

		case cardActionTypes.EDIT_CARD: {
			const newCards = cards.map(c => {
				if (c.id === action.cardId) {
					if (action.newContent) c.content = action.newContent;
					if (action.newDesc) c.desc = action.newDesc;
				}
				return c;
			});

			return updateLists(lists, action.listId, newCards);
		}

		case cardActionTypes.REMOVE_CARD: {
			const newCards = cards.filter(c => c.id !== action.id);
			return updateLists(lists, action.listId, newCards);
		}

		case cardActionTypes.CREATE_LABEL: {
			const newCards = cards.map(c =>
				c.id === action.id
					? {
							...c,
							labels: [...c.labels, LabelModel(action.title, action.color)],
					  }
					: c
			);
			return updateLists(lists, action.listId, newCards);
		}

		case cardActionTypes.REMOVE_LABEL: {
			const newCards = cards.map(c =>
				c.id === action.cardId
					? { ...c, labels: c.labels.filter(lb => lb.id !== action.labelId) }
					: c
			);
			return updateLists(lists, action.listId, newCards);
		}

		case cardActionTypes.CREATE_TASK: {
			const newCards = cards.map(c =>
				c.id === action.id
					? { ...c, tasks: [...c.tasks, TaskModel(action.content)] }
					: c
			);
			return updateLists(lists, action.listId, newCards);
		}

		case cardActionTypes.REMOVE_TASK: {
			const newCards = cards.map(c =>
				c.id === action.id
					? { ...c, tasks: c.tasks.filter(ts => ts.id !== action.taskId) }
					: c
			);
			return updateLists(lists, action.listId, newCards);
		}

		case cardActionTypes.CHANGE_TASK_STATE: {
			const newCards = cards.map(c =>
				c.id === action.cardId
					? {
							...c,
							tasks: c.tasks.map(ts =>
								ts.id === action.taskId ? { ...ts, isDone: action.state } : ts
							),
					  }
					: c
			);
			return updateLists(lists, action.listId, newCards);
		}

		case cardActionTypes.MARK_ALL_TASKS_AS: {
			const newCards = cards.map(c =>
				c.id === action.cardId
					? {
							...c,
							tasks: c.tasks.map(ts => ({ ...ts, isDone: action.state })),
					  }
					: c
			);
			return updateLists(lists, action.listId, newCards);
		}

		case cardActionTypes.REMOVE_COMPLETE_TASKS: {
			const newCards = cards.map(c =>
				c.id === action.cardId
					? { ...c, tasks: c.tasks.filter(ts => ts.isDone !== true) }
					: c
			);
			return updateLists(lists, action.listId, newCards);
		}

		default: {
			return lists;
		}
	}
};
