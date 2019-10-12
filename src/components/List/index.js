import React, { useContext } from 'react';
import { cardActionTypes } from '../../reducers/actionTypes';
import { actionTypes as listActionTypes } from '../../reducers/listReducer';
import useToggle from '../../hooks/useToggle';

import { useDrop } from 'react-dnd';
import { MdAdd, MdClose } from 'react-icons/md';

import {ListContext} from '../../context/listContext';

import { Container, NoCard } from './styled';

import Card from '../Card';
import CardForm from '../CardForm';
import CircularButton from '../CircularButton';
import ListForm from '../ListForm';
import Options from '../Options';

export default function List({ data, index }) {
	const { title, createble, isDone, id, cards } = data;

	const { dispatch } = useContext(ListContext);

	const [isAdding, toggleIsAdding] = useToggle();
	const [isEditing, toggleIsEditing] = useToggle();

	const listOptions = [
		{ handler: toggleIsEditing, name: 'Editar' },
		{
			handler: () => dispatch({ type: listActionTypes.REMOVE, id }),
			name: 'Apagar',
		},
	];

	const handleAddNewCard = inputVal => {
		dispatch({ type: cardActionTypes.CREATE_CARD, content: inputVal, listId: id });
		toggleIsAdding(false);
	};

	const handleUpdateList = (newTitle, newCreateble) => {
		dispatch({ type: listActionTypes.EDIT, newTitle, newCreateble, id });
		toggleIsEditing(false);
	};

	const [, dropRef] = useDrop({
		accept: 'CARD',
		drop(item, monitor) {
			const draggedListIndex = item.listIndex;
			const targetListIndex = index;

			const draggedIndex = item.index;

			if (draggedListIndex === targetListIndex) return;
			dispatch({
				type: listActionTypes.MOVE_CARD,
				fromListIndex: draggedListIndex,
				fromIndex: draggedIndex,
				toListIndex: targetListIndex,
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
					<Card key={card.id} index={i} listIndex={index} data={card} />
				))}
				{(!cards.length && !isAdding) && <NoCard>Sem nenhum card</NoCard>}
				{isAdding && <CardForm listIndex={index} onSubmit={handleAddNewCard} info="Digite o titulo do card" />}
			</ul>
		</Container>
	);
}
