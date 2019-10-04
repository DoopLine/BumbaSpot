import React, { useContext } from 'react';
import useToggle from '../../hooks/useToggle';
import useFormState from '../../hooks/useFormState';
import { useDrop } from 'react-dnd';
import { MdAdd, MdClose } from 'react-icons/md';

import BoardContext from '../Board/context';

import { Container, NoCard } from './styled';

import Card from '../Card';
import CardForm from '../CardForm';
import CircularButton from '../CircularButton';
import ListForm from '../ListForm';
import Options from '../Options';

export default function List({ data, index }) {
	const { title, createble, cards, isDone, id } = data;

	const { moveToList, addCardToList, editList, deleteList } = useContext(
		BoardContext
	);
	const [isAdding, toggleIsAdding] = useToggle();
	const [isEditing, toggleIsEditing] = useToggle();
	const [newTitle, changeNewTitle, resetNewTitle] = useFormState(title);
	const [newCreateble, changeNewCreateble] = useFormState(
		createble,
		'checkbox'
	);

	const listOptions = [
		{ handler: toggleIsEditing, name: 'Editar' },
		{ handler: () => deleteList(id), name: 'Apagar' },
	];

	const handleAddNewCard = (inputVal, listIndex) => {
		addCardToList(inputVal, listIndex);
		toggleIsAdding(false);
	};

	const handleUpdateList = () => {
		editList(newTitle, newCreateble, id);
		// resetNewTitle();
		// resetNewCreateble();
		toggleIsEditing(false);
	};

	const [, dropRef] = useDrop({
		accept: 'CARD',
		drop(item, monitor) {
			const draggedListIndex = item.listIndex;
			const targetListIndex = index;

			const draggedIndex = item.index;

			if (draggedListIndex === targetListIndex) return;
			moveToList(draggedIndex, draggedListIndex, targetListIndex);
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
						setInputVal={changeNewTitle}
						setCheckVal={changeNewCreateble}
						onSubmit={handleUpdateList}
						value={newTitle}
						isStatic={newCreateble}
					/>
				)}
				{cards.map((card, i) => (
					<Card key={card.id} index={i} listIndex={index} data={card} />
				))}
				{!cards.length && <NoCard>Sem nenhum card</NoCard>}
				{isAdding && <CardForm listIndex={index} onSubmit={handleAddNewCard} />}
			</ul>
		</Container>
	);
}
