import uuid from 'uuid/v4';
import { cardActionTypes } from './actionTypes';
const CardModel = content => ({
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

export default (lists, action) => {
	let cards;
	let listRef;
	try {
		listRef = lists.find(l => l.id === action.listId);
		cards = [...listRef.cards];
	} catch (e) {
		console.log('error');
		return lists;
	}
	switch (action.type) {
		case cardActionTypes.CREATE_CARD: {
			return lists.map(l =>
				l.id === action.listId
					? { ...l, cards: [...cards, CardModel(action.content)] }
					: l
			);
		}

		case cardActionTypes.EDIT_CARD: {
			const newCards = cards.map(c => {
				if (c.id === action.cardId) {
					if (action.newContent) c.content = action.newContent;
					if (action.newDesc) c.desc = action.newDesc;
				}
				return c;
			});

			return lists.map(l =>
				l.id === action.listId ? { ...l, cards: newCards } : l
			);
		}

		case cardActionTypes.REMOVE_CARD: {
			const newCards = cards.filter(c => c.id !== action.id);

			return lists.map(l =>
				l.id === action.listId ? { ...l, cards: newCards } : l
			);
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

			return lists.map(l =>
				l.id === action.listId ? { ...l, cards: newCards } : l
			);
		}

		case cardActionTypes.REMOVE_LABEL: {
			const newCards = cards.map(c =>
				c.id === action.cardId
					? { ...c, labels: c.labels.filter(lb => lb.id !== action.labelId) }
					: c
			);
			return lists.map(l =>
				l.id === action.listId ? { ...l, cards: newCards } : l
			);
		}

		case cardActionTypes.CREATE_TASK: {
			const newCards = cards.map(c =>
				c.id === action.id
					? { ...c, tasks: [...c.tasks, TaskModel(action.content)] }
					: c
			);

			return lists.map(l =>
				l.id === action.listId ? { ...l, cards: newCards } : l
			);
		}

		case cardActionTypes.REMOVE_TASK: {
			const newCards = cards.map(c =>
				c.id === action.id
					? { ...c, tasks: c.tasks.filter(ts => ts.id !== action.taskId) }
					: c
			);

			return lists.map(l =>
				l.id === action.listId ? { ...l, cards: newCards } : l
			);
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

			return lists.map(l =>
				l.id === action.listId ? { ...l, cards: newCards } : l
			);
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

			return lists.map(l =>
				l.id === action.listId ? { ...l, cards: newCards } : l
			);
		}

		case cardActionTypes.REMOVE_COMPLETE_TASKS: {
			const newCards = cards.map(c =>
				c.id === action.cardId
					? { ...c, tasks: c.tasks.filter(ts => ts.isDone !== true) }
					: c
			);

			return lists.map(l =>
				l.id === action.listId ? { ...l, cards: newCards } : l
			);
		}

		default: {
			console.log('error');
			return lists;
		}
	}
};
