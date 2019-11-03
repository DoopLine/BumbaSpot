import React, { useContext } from 'react';
import {
	cardActionTypes,
	listActionTypes,
	sessionActionTypes,
} from '../../modules/actionTypes';
import useToggle from '../../hooks/useToggle';
import dispatch from '../../modules/card.actions';
import listDispatcher from '../../modules/list.actions';
import { useDrop } from 'react-dnd';
import { MdAdd, MdClose } from 'react-icons/md';

import { SessionContext } from '../../context/sessionContext';

import { Container, NoCard } from './styled';

import Card from '../Card';
import CardForm from '../CardForm';
import CircularButton from '../CircularButton';
import ListForm from '../ListForm';
import Options from '../Options';

function List({ data, index }) {
	const { title, createble, isDone, id, cards } = data;

	const { session, dispatch: sessionDispatch } = useContext(SessionContext);

	const [isAdding, toggleIsAdding] = useToggle();
	const [isEditing, toggleIsEditing] = useToggle();

	const listOptions = [
		{ handler: toggleIsEditing, name: 'Editar' },
		{
			handler: handleRemoveList
				,
			name: 'Apagar',
		},
	];

	function handleRemoveList() {
		const newLists = listDispatcher({
			type: listActionTypes.REMOVE_LIST,
			listId: id,
			lists: session.user.lists,
		});

		if(!newLists) return console.log('Algo deu errado ao atualizar a lista com novos cards');

		sessionDispatch({
			type: sessionActionTypes.UPDATE_CURRENT_USER_SESSION,
			user: { ...session.user, lists: newLists },
		});
	}

	const handleAddNewCard = inputVal => {
		const newCards = dispatch({
			type: cardActionTypes.CREATE_CARD,
			content: inputVal,
			cards,
		});

		if (!newCards)
			return console.log('Algo deu errado ao adicionar um novo card');

		const newLists = listDispatcher({
			type: listActionTypes.UPDATE_LIST_CARDS,
			lists: session.user.lists,
			newCards,
			listId: id,
		});

		if (!newLists)
			return console.log(
				'Algo deu errado ao atualizar a lista com novos cards'
			);

		sessionDispatch({
			type: sessionActionTypes.UPDATE_CURRENT_USER_SESSION,
			user: { ...session.user, lists: newLists },
		});

		toggleIsAdding(false);
	};

	const handleUpdateList = (newTitle, newCreateble) => {
		const newLists = listDispatcher({
			type: listActionTypes.EDIT_LIST,
			newTitle,
			newCreateble,
			listId: id,
			lists: session.user.lists,
		});

		if (!newLists)
			return console.log(
				'Algo deu errado ao atualizar a lista com novos cards'
			);

		sessionDispatch({
			type: sessionActionTypes.UPDATE_CURRENT_USER_SESSION,
			user: { ...session.user, lists: newLists },
		});

		toggleIsEditing(false);
	};

	const [, dropRef] = useDrop({
		accept: 'CARD',
		drop(item, monitor) {
			const draggedListIndex = item.listIndex;
			const targetListIndex = index;

			const draggedIndex = item.index;

			if (draggedListIndex === targetListIndex) return;
			const newLists = listDispatcher({
				type: listActionTypes.MOVE_CARD,
				fromListIndex: draggedListIndex,
				fromIndex: draggedIndex,
				toListIndex: targetListIndex,
				lists: session.user.lists,
			});

			if (!newLists)
				return console.log(
					'Algo deu errado ao atualizar a lista com novos cards'
				);

			sessionDispatch({
				type: sessionActionTypes.UPDATE_CURRENT_USER_SESSION,
				user: { ...session.user, lists: newLists },
			});

			item.listIndex = targetListIndex;
		},
	});
	return (
		<Container done={isDone} ref={dropRef}>
			<header>
				<h2>{title}</h2>
				{((createble && isEditing) ||
					(!createble && !isEditing) ||
					(!createble && isEditing)) && (
					<CircularButton
						lint='Criar Card'
						onClick={() =>
							isEditing ? toggleIsEditing(false) : toggleIsAdding()
						}
						secondary={true}>
						{!isAdding && !isEditing ? <MdAdd /> : <MdClose />}
					</CircularButton>
				)}
				<Options options={listOptions} />
			</header>
			<ul>
				{isEditing && (
					<ListForm
						isEditing={isEditing}
						onSubmit={handleUpdateList}
						value={title}
						checked={createble}
					/>
				)}
				{cards.map((card, i) => (
					<Card
						key={card.id}
						index={i}
						listIndex={index}
						listId={id}
						data={card}
					/>
				))}
				{!cards.length && !isAdding && <NoCard>Sem nenhum card</NoCard>}
				{isAdding && (
					<CardForm
						onSubmit={handleAddNewCard}
						info='Digite o titulo do card'
					/>
				)}
			</ul>
		</Container>
	);
}

export default React.memo(List);