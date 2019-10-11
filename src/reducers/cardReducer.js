import uuid from 'uuid/v4';

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

export const actionTypes = {
	// SET_CARDS: 'SET_CARDS',
	CREATE: 'CREATE',
	EDIT: 'EDIT',
	REMOVE: 'REMOVE',
	CREATE_LABEL: 'CREATE_LABEL',
	REMOVE_LABEL: 'REMOVE_LABEL',
	CREATE_TASK: 'CREATE_TASK',
	REMOVE_TASK: 'REMOVE_TASK',
	MARK_ALL_TASKS_AS: 'MARK_ALL_TASKS_AS',
	REMOVE_COMPLETE_TASKS: 'REMOVE_COMPLETE_TASKS',
	CHANGE_TASK_STATE: 'CHANGE_TASK_STATE',
};

export default (cards, action) => {
	switch (action.type) {
		// case actionTypes.SET_CARDS: {
		// 	return action.cards;
		// }

		case actionTypes.CREATE: {
			cards.push(CardModel(action.content));
			return cards;
		}

		case actionTypes.EDIT: {
			const cardRef = cards.find(c => c.id === action.id);
			if (action.newDesc) cardRef.desc = action.newDesc;
			if (action.newContent) cardRef.content = action.newContent;
			return cards;
		}

		case actionTypes.REMOVE: {
			return cards.filter(c => c.id !== action.id);
		}

		case actionTypes.CREATE_LABEL: {
			const cardRef = cards.find(c => c.id === action.id);
			cardRef.labels.push(LabelModel(action.title, action.color));
			return cards;
		}

		case actionTypes.REMOVE_LABEL: {
			const cardRef = cards.find(c => c.id === action.cardId);
			cardRef.labels = cardRef.labels.filter(lb => lb.id !== action.labelId);
			return cards;
		}

		case actionTypes.CREATE_TASK: {
			const cardRef = cards.find(c => c.id === action.id);
			cardRef.tasks.push(TaskModel(action.content));
			return cards;
		}

		case actionTypes.REMOVE_TASK: {
			const cardRef = cards.find(c => c.id === action.cardId);
			cardRef.tasks = cardRef.tasks.filter(ts => ts.id !== action.labelId);
			return cards;
		}

		case actionTypes.CHANGE_TASK_STATE: {
			const cardRef = cards.find(c => c.id === action.cardId);
			cardRef.tasks.forEach(ts => {
				if (ts.id === action.taskId) {
					ts.isDone = action.state;
				}
				return ts;
			});
			return cards;
		}
		case actionTypes.MARK_ALL_TASKS_AS: {
			const cardRef = cards.find(c => c.id === action.cardId);
			cardRef.tasks.forEach(ts => (ts.isDone = action.state));
			return cards;
		}

		case actionTypes.REMOVE_COMPLETE_TASKS: {
			const cardRef = cards.find(c => c.id === action.cardId);
			cardRef.tasks = cardRef.tasks.filter(ts => ts.isDone !== true);
			return cards;
		}

		default: {
			console.log('error');
			return cards;
		}
	}
};
