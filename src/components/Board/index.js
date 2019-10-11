import React, { useReducer } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import listReducer, { actionTypes } from '../../reducers/listReducer';
// import cardReducer, { actionTypes as cardActionTypes } from '../../reducers/cardReducer';
import useToggle from '../../hooks/useToggle';
import useFormState from '../../hooks/useFormState';
// import TestLists from '../../data/tests/testeData';
import BoardContext from './context';

import { MdAdd } from 'react-icons/md';
import List from '../List/index';
import CircularButton from '../CircularButton';
import ListForm from '../ListForm';
import CardInfoSide from '../CardInfoSide';

import { Container, EmptyList } from './styled';

// const listas = TestLists();

export default function Board() {
	// Visibility vars
	const [isCreating, toggleIsCreationg] = useToggle(false);
	let listHasLength;

	const [lists, dispatch] = useReducer(listReducer, []);

	listHasLength = lists.length !== 0;

	const [inputVal, changeInputVal, resetInputVal] = useFormState('');
	const [checkVal, changeCheckVal, resetCheckVal] = useFormState(
		false,
		'checkbox'
	);
	const history = useHistory();

	//functions
	const openCard = (listIndex, cardId) => {
		history.push(`/board/${cardId}`, { cards: lists[listIndex].cards });
	};

	const handleCreateButton = () => {
		if (!isCreating) {
			toggleIsCreationg();
		} else if (inputVal) {
			dispatch({
				type: actionTypes.CREATE,
				title: inputVal,
				createble: checkVal,
			});
			toggleIsCreationg();
			resetCheckVal();
			resetInputVal();
		}
	};

	return (
		<BoardContext.Provider
			value={{
				lists,
				openCard,
				listDispatch: dispatch,
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
				<Switch>
					<Route exact path='/board/:cardId'>
						<CardInfoSide />
					</Route>
				</Switch>
				<CircularButton
					float={true}
					purse={!listHasLength && !isCreating}
					onClick={handleCreateButton}
					lint='Criar Lista'>
					<MdAdd />
				</CircularButton>
			</Container>
		</BoardContext.Provider>
	);
}
