import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import useToggle from '../../hooks/useToggle';
import useFormState from '../../hooks/useFormState';
import useListState from '../../hooks/useListState';
// import TestLists from '../../data/tests/testeData';
import BoardContext from './context';

import List from '../List/index';
import CircularButton from '../CircularButton';
import ListForm from '../ListForm';
import CardInfoSide from '../CardInfoSide';

import { Container, EmptyList } from './styled';

// const listas = TestLists();

export default function Board() {
	// Visibility vars
	const [isCreating, toggleIsCreationg] = useToggle(false);
	const [hasToOpen, toggleHasToOpen] = useToggle(false);
	let listHasLength;
	// Vars
	// const [lists, setLists] = useState([]);
	const [lists, createList, editList, deleteList, addCardToList, editCard , addLabelToCard, removeLabelFromCard, setLists] = useListState(
		[]
	);
	const [currentData, setCurrentData] = useState(undefined);

	listHasLength = lists.length !== 0;

	const [inputVal, changeInputVal, resetInputVal] = useFormState('');
	const [checkVal, changeCheckVal, resetCheckVal] = useFormState(false, 'checkbox');

	//functions

	const openCard = (card, listIndex) => {
		setCurrentData({ card, listName: lists[listIndex].title, listIndex });
		toggleHasToOpen();
	};

	const move = (fromIndex, toIndex, fromListIndex, toListIndex) => {
		const workingLists = [...lists];
		const workingFromList = workingLists[fromListIndex];
		const workingToList = workingLists[toListIndex];

		const dragged = workingFromList.cards[fromIndex];
		workingFromList.cards.splice(fromIndex, 1);
		workingToList.cards.splice(toIndex, 0, dragged);
		setLists(workingLists);
	};

	const moveToList = (fromIndex, fromListIndex, toListIndex) => {
		const workingLists = [...lists];
		const workingFromList = workingLists[fromListIndex];
		const workingToList = workingLists[toListIndex];
		const dragged = workingFromList.cards[fromIndex];

		workingFromList.cards.splice(fromIndex, 1);
		workingToList.cards.push(dragged);
		setLists(workingLists);
	};

	const handleCreateButton = () => {
		if (!isCreating) {
			toggleIsCreationg();
		} else if (inputVal) {
			createList(inputVal, checkVal);
			toggleIsCreationg();
			resetCheckVal();
			resetInputVal();
		}
	};

	return (
		<BoardContext.Provider
			value={{
				lists,
				move,
				moveToList,
				addCardToList,
				editCard,
				openCard,
				createList,
				setCurrentData,
				setLists,
				addLabelToCard,
				removeLabelFromCard,
				editList,
				deleteList
			}}>
			<Container>
				{!listHasLength && (
					<EmptyList>
						<p>Crie uma nova lista</p>
					</EmptyList>
				)}

				{lists.map((list, i) => (
					<List key={list.id} index={i} data={list} />
				))}

				{listHasLength && (
					<span style={{ opacity: 0 }}>lorem ipsum dolor</span>
				) /* para espaçamento */}

				{isCreating && (
					<ListForm
						float={true}
						setInputVal={changeInputVal}
						setCheckVal={changeCheckVal}
						closeForm={toggleIsCreationg}
						value={inputVal}
					/>
				)}

				<CircularButton
					float={true}
					purse={!listHasLength && !isCreating}
					onClick={handleCreateButton}
					lint='Criar Lista'>
					<MdAdd />
				</CircularButton>

				{hasToOpen && (
					<CardInfoSide data={currentData} close={toggleHasToOpen} />
				)}
			</Container>
		</BoardContext.Provider>
	);
}
