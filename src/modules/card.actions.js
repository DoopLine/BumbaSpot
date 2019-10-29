import uuid from 'uuid/v4';
import { cardActionTypes } from '../modules/actionTypes';
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


export default (action) => {
	const {cards } = action;

	switch (action.type) {
		case cardActionTypes.CREATE_CARD: {
			const {content} = action;
			return [...cards, CardModel(content)];
		}

		case cardActionTypes.EDIT_CARD: {
			return cards.map(c => {
				if (c.id === action.cardId) {
					if (action.newContent) c.content = action.newContent;
					if (action.newDesc) c.desc = action.newDesc;
				}
				return c;
			});
		}

		case cardActionTypes.REMOVE_CARD: {
			return cards.filter(c => c.id !== action.id);
		}

		case cardActionTypes.CREATE_LABEL: {
			return cards.map(c =>
				c.id === action.id
					? {
							...c,
							labels: [...c.labels, LabelModel(action.title, action.color)],
					  }
					: c
			);
		}

		case cardActionTypes.REMOVE_LABEL: {
			return cards.map(c =>
				c.id === action.cardId
					? { ...c, labels: c.labels.filter(lb => lb.id !== action.labelId) }
					: c
			);
		}

		case cardActionTypes.CREATE_TASK: {
			return cards.map(c =>
				c.id === action.id
					? { ...c, tasks: [...c.tasks, TaskModel(action.content)] }
					: c
			);
		}

		case cardActionTypes.REMOVE_TASK: {
			return cards.map(c =>
				c.id === action.id
					? { ...c, tasks: c.tasks.filter(ts => ts.id !== action.taskId) }
					: c
			);
		}

		case cardActionTypes.CHANGE_TASK_STATE: {
			return cards.map(c =>
				c.id === action.cardId
					? {
							...c,
							tasks: c.tasks.map(ts =>
								ts.id === action.taskId ? { ...ts, isDone: action.state } : ts
							),
					  }
					: c
			);
		}

		case cardActionTypes.MARK_ALL_TASKS_AS: {
			return cards.map(c =>
				c.id === action.cardId
					? {
							...c,
							tasks: c.tasks.map(ts => ({ ...ts, isDone: action.state })),
					  }
					: c
			);
		}

		case cardActionTypes.REMOVE_COMPLETE_TASKS: {
			return cards.map(c =>
				c.id === action.cardId
					? { ...c, tasks: c.tasks.filter(ts => ts.isDone !== true) }
					: c
			);
		}

		default: {
			return undefined;
		}
	}
};
