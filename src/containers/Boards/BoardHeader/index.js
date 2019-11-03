import React from 'react';
import useToggle from '../../../hooks/useToggle';
import { Container, BoardGrid } from './styled';

import ShadowWrapper from '../../../components/ShadowWrapper';
import BoardForm from '../../../components/BoardForm';
import Button from '../../../components/Button';

function BoardHeader({
	boardsLength,
	creating,
	toggleCreating,
	displayBoard,
	handleCreateBoard,
}) {
	const [showBoards, toggleShowBoards] = useToggle();

	return (
		<ShadowWrapper>
			<Container id='boardHeader'>
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
			</Container>
			{showBoards && (
				<BoardGrid>
					{displayBoard()}
					{!boardsLength && <h1>Nenhum board foi criado</h1>}
				</BoardGrid>
			)}
		</ShadowWrapper>
	);
}

export default React.memo(BoardHeader);