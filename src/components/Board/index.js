import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { listActionTypes } from '../../reducers/actionTypes';
import useToggle from '../../hooks/useToggle';

import { MdAdd, MdClose } from 'react-icons/md';
import List from '../List/index';
import CircularButton from '../CircularButton';
import ListForm from '../ListForm';

import { Container, EmptyList } from './styled';

import { ListContext } from '../../context/listContext';

// const listas = TestLists();

function Board() {
	const { boardId } = useParams();

	// Visibility vars
	let listHasLength;
	const [isCreating, toggleIsCreationg] = useToggle(false);

	const { lists, dispatch } = useContext(ListContext);

	const Boardlists = lists.filter(_list => _list.boardId === boardId);

	listHasLength = Boardlists.length !== 0;

	const handleCreateList = (title, createble) => {
		dispatch({
			type: listActionTypes.CREATE_LIST,
			title,
			createble,
			boardId,
		});
		toggleIsCreationg();
	};

	return (
		<Container>
			{!listHasLength && (
				<EmptyList imgSrc={require('../../assets/svg/list.svg')}>
					<p>Crie uma nova lista</p>
				</EmptyList>
			)}

			{Boardlists.map((list, i) => (
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

			<CircularButton
				float={true}
				purse={!listHasLength && !isCreating}
				onClick={toggleIsCreationg}
				lint='Criar Lista'>
				{!isCreating ? <MdAdd /> : <MdClose />}
			</CircularButton>
		</Container>
	);
}

export default Board;
