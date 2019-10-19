import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdTimer } from 'react-icons/md';

import useToggle from '../../hooks/useToggle';

import { Container, BoardGrid, BoardCard, BoardHeader } from './styled';

import BoardForm from '../BoardForm';
import Button from '../Button';
import BoardContentSection from './BoardContentSection';

import { boardActionTypes } from '../../reducers/actionTypes';
import { BoardContext } from '../../context/boardContext';

function Boards() {
	const history = useHistory();

	const { boards, dispatch } = useContext(BoardContext);

	const [currBoard, setCurrBoard] = useState(undefined);

	//Visibility vars
	const [creating, toggleCreating] = useToggle();
	const [showBoards, toggleShowBoards] = useToggle();

	//Handlers
	const handleCreateBoard = title => {
		dispatch({ type: boardActionTypes.CREATE_BOARD, title });
		toggleCreating();
	};

	const handleEditBoard = newTitle => {
		const boardId = currBoard.id;
		dispatch({
			type: boardActionTypes.EDIT_BOARD,
			newTitle,
			boardId,
		});
		setCurrBoard(undefined);
	};

	const handleRemoveBoard = () => {
		const boardId = currBoard.id;
		dispatch({
			type: boardActionTypes.REMOVE_BOARD,
			boardId,
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
			<BoardHeader id="boardHeader">
				<p>
					''Aqui estão os <strong>Boards</strong> que representam os seus
					projectos que estão a ser gerenciados aqui no{' '}
					<strong>BumbaSpot.</strong>''
				</p>
				<div>
					{creating && <BoardForm onSubmit={handleCreateBoard} />}
					<Button title='criar board' onClick={toggleCreating}>
						{creating ? 'Cancelar' : 'Criar Board'}
					</Button>
					<Button title='criar board' onClick={toggleShowBoards}>
						{showBoards ? 'Ocultar Boards' : 'Mostrar Boards'}
					</Button>
				</div>
				{showBoards && (
					<BoardGrid>
						{displayBoard()}
						{!boards.length && <h1>Nenhum board foi criado</h1>}
					</BoardGrid>
				)}
			</BoardHeader>
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

export default Boards;
