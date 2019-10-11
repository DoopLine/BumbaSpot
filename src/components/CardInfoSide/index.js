import React, { useReducer } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import cardReducer, { actionTypes } from '../../reducers/cardReducer';
import { MdEdit, MdAdd, MdClose } from 'react-icons/md';
import useToggle from '../../hooks/useToggle';

import {
	Container,
	LabelSection,
	DescriptionSection,
	TaskSection,
	Progress,
	TaskItem,
	Header,
} from './styled';

// import BoardContext from '../Board/context';

import Backdrop from '../Backdrop';
import CheckBox from '../CheckBox';
import CardForm from '../CardForm';
import LabelForm from '../LabelForm';
import CircularButton from '../CircularButton';
import Label from '../Label';
import Options from '../Options';

function CardInfoSide() {
	const history = useHistory();

	if(history.location.state === undefined) {
		console.log('here');
		history.push("/board");
	}
	const { cardId } = useParams();
	console.log(history.location);
	// const { lists } = useContext(BoardContext);
	// console.log(lists);
	const [cards, dispatch] = useReducer(cardReducer, history.location.state.cards);
	
	const card = cards.find(c => c.id === cardId);
	
	const [isEditingName, toggleIsEditingName] = useToggle();
	const [isEditingDesc, toggleIsEditingDesc] = useToggle();
	const [isEditingTask, toggleIsEditingTask] = useToggle();
	const [, toggleIsDeleting] = useToggle(false);
	const [hasLabelForm, toggleHasLabelForm] = useToggle();

	const taskOptions = [
		{
			handler: () => {
				dispatch({
					type: actionTypes.MARK_ALL_TASKS_AS,
					cardId: card.id,
					state: true,
				});
				toggleIsDeleting();
			},
			name: 'Marcar Todas Como Feitas',
		},
		{
			handler: () => {
				dispatch({
					type: actionTypes.MARK_ALL_TASKS_AS,
					cardId: card.id,
					state: false,
				});
				toggleIsDeleting();
			},
			name: 'Desmarcar Todas Como Feitas',
		},
		{
			handler: () => {
				dispatch({
					type: actionTypes.REMOVE_COMPLETE_TASKS,
					cardId: card.id,
				});
				// toggleIsDeleting();
			},
			name: 'Remover Todas as Feitas',
		},
	];

	// Functions
	const handleEditCard = (inputVal, keyName) => {
		// debugger;
		dispatch({ type: actionTypes.EDIT, [keyName]: inputVal, id: card.id });
		toggleIsEditingName(false);
		toggleIsEditingDesc(false);
	};
	const handleCreateLabel = (inputVal, color) => {
		if (inputVal) {
			dispatch({
				type: actionTypes.CREATE_LABEL,
				title: inputVal,
				id: card.id,
				color,
			});
			toggleHasLabelForm(false);
		}
	};
	const handleRemovingLabel = id => {
		dispatch({
			type: actionTypes.REMOVE_LABEL,
			cardId: card.id,
			labelId: id,
		});
		toggleIsDeleting();
	};

	return (
		<>
			<Backdrop onClick={() => history.push('/board')} />
			<Container>
				<header>
					<Header>
						<h1>{card.content}</h1>
						<CircularButton
							onClick={toggleIsEditingName}
							lint='Editar titulo do card'
							small={true}>
							<MdEdit />
						</CircularButton>
					</Header>
					<p>{'Lorem Ipsum Dolor'}</p>
				</header>
				{isEditingName && (
					<CardForm
						onSubmit={handleEditCard}
						initInputVal={card.content}
						keyName='newContent'
						info='Digite o novo titulo'
					/>
				)}
				<section>
					<LabelSection>
						<Header>
							<h2>Rótulos</h2>
							<CircularButton
								onClick={toggleHasLabelForm}
								lint='adicinar Rótulo'
								small={true}>
								{!hasLabelForm ? <MdAdd /> : <MdClose />}
							</CircularButton>
						</Header>
						<div>
							{!card.labels.length && (
								<Label color='lightgray' disable={true} title={'Sem rótulos'} />
							)}
							{card.labels.map(({ color, title, id }) => (
								<Label
									key={id}
									color={color}
									title={title}
									onClick={() => handleRemovingLabel(id)}
								/>
							))}
						</div>
						{hasLabelForm && <LabelForm onSubmit={handleCreateLabel} />}
					</LabelSection>
					<DescriptionSection>
						<Header>
							<h2>Descrição</h2>
							<CircularButton
								onClick={toggleIsEditingDesc}
								lint='Editar descricão do card'
								small={true}>
								<MdEdit />
							</CircularButton>
						</Header>
						<p>{card.desc || 'Sem Descrição'}</p>
						{isEditingDesc && (
							<CardForm
								keyName='newDesc'
								info='Descreva o card'
								onSubmit={handleEditCard}
								initInputVal={card.desc}
							/>
						)}
					</DescriptionSection>
					<TaskSection>
						<Header>
							<h2>Tarefas</h2>
							<CircularButton
								onClick={toggleIsEditingTask}
								lint='Adicionar Tarefa'
								small={true}>
								<MdAdd />
							</CircularButton>
							{<div style={{ margin: '0 .5rem' }}></div>}
							<Options options={taskOptions} small={true} />
						</Header>
						{!card.tasks.length && <p>Sem Tarefas</p>}
						{<div style={{ margin: '2rem 0' }}></div>}
						{isEditingTask && (
							<CardForm
								keyName='newDesc'
								info='Descreva a tarefa'
								onSubmit={inputVal => {
									dispatch({
										type: actionTypes.CREATE_TASK,
										content: inputVal,
										id: card.id,
									});
									toggleIsEditingTask();
								}}
							/>
						)}
						{!!card.tasks.length && (
							<TaskItem>
								<span style={{ display: 'flex' }}>
									<p style={{ marginRight: '.5rem' }}>15%</p>
									<Progress value='15' max='100'></Progress>
								</span>
								{card.tasks.map(({ id, content, isDone }) => (
									<CheckBox
										onChange={() => {
											dispatch({
												type: actionTypes.CHANGE_TASK_STATE,
												cardId: card.id,
												taskId: id,
												state: !isDone,
											});
										}}
										key={id}
										title={content}
										checked={isDone}
									/>
								))}
							</TaskItem>
						)}
					</TaskSection>
				</section>
			</Container>
		</>
	);
}

export default CardInfoSide;