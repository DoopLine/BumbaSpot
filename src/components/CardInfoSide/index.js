import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { MdEdit, MdAdd, MdClose } from 'react-icons/md';
import useToggle from '../../hooks/useToggle';
import  dispatch from "../../modules/card.actions";
import  listDispatcher from "../../modules/list.actions";
import { cardActionTypes, listActionTypes, sessionActionTypes } from '../../modules/actionTypes';
import { SessionContext } from '../../context/sessionContext';

import {
	Container,
	LabelSection,
	DescriptionSection,
	TaskSection,
	Progress,
	TaskItem,
	Header,
} from './styled';

import Backdrop from '../Backdrop';
import CheckBox from '../CheckBox';
import CardForm from '../CardForm';
import LabelForm from '../LabelForm';
import CircularButton from '../CircularButton';
import Label from '../Label';
import Options from '../Options';

function CardInfoSide() {
	const history = useHistory();
	const { cardId, listId } = useParams();

	const { session, dispatch: sessionDispatch } = useContext(SessionContext);

	const list = session.user.lists.find(_l => _l.id === listId);
	const currCard = list.cards.find(c => c.id === cardId);

	// if (currCard === undefined) history.replace('/*');

	const [isEditingName, toggleIsEditingName] = useToggle();
	const [isEditingDesc, toggleIsEditingDesc] = useToggle();
	const [isEditingTask, toggleIsEditingTask] = useToggle();
	const [hasLabelForm, toggleHasLabelForm] = useToggle();

	const doneTasksCount = currCard.tasks.reduce((acc, cur) => {
		if (cur.isDone) acc++;
		return acc;
	}, 0);

	const taskProgress = Math.round(
		(doneTasksCount / currCard.tasks.length) * 100
	);

	const taskOptions = [
		{
			handler: () => handleMarkAllTasksAs(true),
			name: 'Marcar Todas Como Feitas',
		},
		{
			handler: () => handleMarkAllTasksAs(false),
			name: 'Desmarcar Todas Como Feitas',
		},
		{
			handler: handleRemoveCompleteTasks,
			name: 'Remover Todas as Feitas',
		},
	];

	// Functions

	function updateData(newCards){
		if (!newCards)
			return console.log('Algo deu errado ao adicionar um novo card');

		const newLists = listDispatcher({
			type: listActionTypes.UPDATE_LIST_CARDS,
			lists: session.user.lists,
			newCards,
			listId,
		});

		if (!newLists)
			return console.log(
				'Algo deu errado ao atualizar a lista com novos cards'
			);

		sessionDispatch({
			type: sessionActionTypes.UPDATE_CURRENT_USER_SESSION,
			user: { ...session.user, lists: newLists },
		});
	}

	function handleMarkAllTasksAs(state){
		const newCards = dispatch({
			type: cardActionTypes.MARK_ALL_TASKS_AS,
			cardId,
			state,
			listId,
			cards: list.cards
		});

		updateData(newCards);
	}

	function handleRemoveCompleteTasks(){
		const newCards = dispatch({
			type: cardActionTypes.REMOVE_COMPLETE_TASKS,
			cardId,
			listId,
			cards: list.cards
		});

		updateData(newCards);
	}

	const handleEditCard = (inputVal, keyName) => {
		const newCards = dispatch({
			type: cardActionTypes.EDIT_CARD,
			[keyName]: inputVal,
			cardId,
			listId,
			cards: list.cards
		});

		updateData(newCards);

		toggleIsEditingName(false);
		toggleIsEditingDesc(false);
	};

	const handleCreateLabel = (inputVal, color) => {
		if (inputVal) {
			const newCards = dispatch({
				type: cardActionTypes.CREATE_LABEL,
				title: inputVal,
				id: currCard.id,
				color,
				listId,
				cards: list.cards
			});
			updateData(newCards);
			toggleHasLabelForm(false);
		}
	};

	const handleRemovingLabel = id => {
		const newCards = dispatch({
			type: cardActionTypes.REMOVE_LABEL,
			cardId: currCard.id,
			labelId: id,
			listId,
			cards: list.cards
		});
		updateData(newCards);
	};

	return (
		<>
			<Backdrop onClick={() => history.goBack()} />
			<Container>
				<header>
					<Header>
						<h1>{currCard.content}</h1>
						<CircularButton
							onClick={toggleIsEditingName}
							lint='Editar titulo do card'
							small={true}>
							{isEditingName ? <MdClose /> : <MdEdit />}
						</CircularButton>
					</Header>
					<p>{'Lorem Ipsum Dolor'}</p>
				</header>
				{isEditingName && (
					<CardForm
						onSubmit={handleEditCard}
						initInputVal={currCard.content}
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
							{!currCard.labels.length && (
								<Label color='lightgray' disable={true} title={'Sem rótulos'} />
							)}
							{currCard.labels.map(({ color, title, id }) => (
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
								{!isEditingDesc ? <MdEdit /> : <MdClose />}
							</CircularButton>
						</Header>
						<p>{currCard.desc || 'Sem Descrição'}</p>
						{isEditingDesc && (
							<CardForm
								keyName='newDesc'
								info='Descreva o card'
								onSubmit={handleEditCard}
								initInputVal={currCard.desc}
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
								{!isEditingTask ? <MdAdd /> : <MdClose />}
							</CircularButton>
							{<div style={{ margin: '0 .5rem' }}></div>}
							<Options options={taskOptions} small={true} />
						</Header>
						{!currCard.tasks.length && <p>Sem Tarefas</p>}
						{<div style={{ margin: '2rem 0' }}></div>}
						{isEditingTask && (
							<CardForm
								keyName='newDesc'
								info='Descreva a tarefa'
								onSubmit={inputVal => {
									const newCards = dispatch({
										type: cardActionTypes.CREATE_TASK,
										content: inputVal,
										id: currCard.id,
										listId,
										cards: list.cards
									});
									updateData(newCards);
									toggleIsEditingTask();
								}}
							/>
						)}
						{!!currCard.tasks.length && (
							<TaskItem>
								<span style={{ display: 'flex' }}>
									<p style={{ marginRight: '.5rem' }}>{taskProgress}%</p>
									<Progress value={taskProgress} max='100'></Progress>
								</span>
								{currCard.tasks.map(({ id, content, isDone }) => (
									<CheckBox
										onChange={() => {
											const newCards = dispatch({
												type: cardActionTypes.CHANGE_TASK_STATE,
												cardId: currCard.id,
												taskId: id,
												state: !isDone,
												listId,
												cards: list.cards
											});
											updateData(newCards);
										}}
										key={id}
										id={id}
										title={content}
										checked={isDone}
										lineThrough={isDone && true}
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
