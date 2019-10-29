import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { listActionTypes, sessionActionTypes } from '../../modules/actionTypes';
import dispatch from '../../modules/list.actions';
import useToggle from '../../hooks/useToggle';

import { MdAdd, MdClose } from 'react-icons/md';
import List from '../List/index';
import CircularButton from '../CircularButton';
import ListForm from '../ListForm';

import { Container, EmptyList } from './styled';

import { SessionContext } from '../../context/sessionContext';

function Board() {
	const { boardId } = useParams();

	// Visibility vars
	let listHasLength;
	const [isCreating, toggleIsCreationg] = useToggle(false);

	const { session, dispatch: sessionDispatch } = useContext(SessionContext);

	const Boardlists = session.user.lists.filter(_l=> _l.boardId === boardId); 

	listHasLength = Boardlists.length !== 0;

	const handleCreateList = (title, createble) => {
		const newLists = dispatch({
			type: listActionTypes.CREATE_LIST,
			title,
			createble,
			boardId,
			lists: Boardlists,
		});

		if(!newLists) return console.log('ocorreu algum erro ao criar uma nova lista');
		sessionDispatch({
			type: sessionActionTypes.UPDATE_CURRENT_USER_SESSION,
			user: { ...session.user, lists: newLists },
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
