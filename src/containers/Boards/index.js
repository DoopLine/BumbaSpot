import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdTimer } from 'react-icons/md';
import dispatch from '../../modules/board.actions';
import useToggle from '../../hooks/useToggle';

import { Container, BoardCard } from './styled';

import BoardContentSection from './BoardContentSection';
import BoardHeader from './BoardHeader';

import {
	boardActionTypes,
	sessionActionTypes,
} from '../../modules/actionTypes';

import { SessionContext } from '../../context/sessionContext';

function Boards() {
	const history = useHistory();

	const { session, dispatch: sessionDispatch } = useContext(SessionContext);

	const boards = session.user.boards;

	const userId = session.user.id;

	const [currBoard, setCurrBoard] = useState(undefined);

	//Visibility vars
	const [creating, toggleCreating] = useToggle();

	//Handlers
	const handleCreateBoard = title => {
		const newBoards = dispatch({
			type: boardActionTypes.CREATE_BOARD,
			title,
			boards,
			owner: session.user.name,
		});

		if (!newBoards) return console.log('Algo correu errado ao criar o board');
		sessionDispatch({
			type: sessionActionTypes.UPDATE_CURRENT_USER_SESSION,
			user: { ...session.user, boards: newBoards },
		});
		toggleCreating();
	};

	const handleEditBoard = newTitle => {
		const boardId = currBoard.id;
		const newBoards = dispatch({
			type: boardActionTypes.EDIT_BOARD,
			newTitle,
			boardId,
			boards,
			userId,
		});

		if (!newBoards) return console.log('Algo correu errado ao editar o board');
		sessionDispatch({
			type: sessionActionTypes.UPDATE_CURRENT_USER_SESSION,
			user: { ...session.user, boards: newBoards },
		});
		setCurrBoard(undefined);
	};

	const handleRemoveBoard = () => {
		const boardId = currBoard.id;
		const newBoards = dispatch({
			type: boardActionTypes.REMOVE_BOARD,
			boardId,
			boards,
			userId,
		});

		if (!newBoards) return console.log('Algo correu errado ao deletar o board');
		sessionDispatch({
			type: sessionActionTypes.UPDATE_CURRENT_USER_SESSION,
			user: { ...session.user, boards: newBoards },
		});
		setCurrBoard(undefined);
	};

	const displayBoard = () => {
		return boards.map(_board => (
			<BoardCard key={_board.id} onClick={() => setCurrBoard(_board)}>
				<h1>{_board.title}</h1>
				<div>
					<span>
						<MdTimer />
						<p>data de criaçao</p>
					</span>
				</div>
			</BoardCard>
		));
	};

	return (
		<Container>
			<BoardHeader
				boardsLength={boards.length}
				creating={creating}
				displayBoard={displayBoard}
				handleCreateBoard={handleCreateBoard}
				toggleCreating={toggleCreating}
			/>
			{currBoard && (
				<BoardContentSection
					history={history}
					currBoard={currBoard}
					onEdit={handleEditBoard}
					onRemove={handleRemoveBoard}
				/>
			)}
		</Container>
	);
}

export default React.memo(Boards);
