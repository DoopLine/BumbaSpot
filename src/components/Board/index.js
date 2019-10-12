import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { actionTypes } from '../../reducers/listReducer';
import useToggle from '../../hooks/useToggle';

import { MdAdd, MdClose } from 'react-icons/md';
import List from '../List/index';
import CircularButton from '../CircularButton';
import ListForm from '../ListForm';
import CardInfoSide from '../CardInfoSide';

import { Container, EmptyList } from './styled';

import { ListContext } from '../../context/listContext';

// const listas = TestLists();

function Board() {
	// Visibility vars
	const [isCreating, toggleIsCreationg] = useToggle(false);
	let listHasLength;

	const { lists, dispatch } = useContext(ListContext);

	listHasLength = lists.length !== 0;

	const handleCreateList = (title, createble) => {
		dispatch({
			type: actionTypes.CREATE,
			title,
			createble,
		});
		toggleIsCreationg();
	};

	return (
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
					closeForm={toggleIsCreationg}
					onSubmit={handleCreateList}
				/>
			)}
			<Switch>
				<Route exact path='/board/:cardId/:listIndex'>
					<CardInfoSide />
				</Route>
			</Switch>
			<CircularButton
				float={true}
				purse={!listHasLength && !isCreating}
				onClick={toggleIsCreationg}
				lint='Criar Lista'>
				{!isCreating? <MdAdd /> : <MdClose />}
			</CircularButton>
		</Container>
	);
}

export default Board;
