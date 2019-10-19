import React from 'react';
import { MdTimer, MdList, MdEdit, MdClose } from 'react-icons/md';
import useTogge from '../../../hooks/useToggle';

import { Container, Header } from './styled';

import Button from '../../Button';
import CircularButton from '../../CircularButton';
import BoardForm from '../../BoardForm';

function BoardContentSection({ history, currBoard, onEdit, onRemove }) {
	const [editing, toggleEditing] = useTogge();

	const handleDeleteBoard = ()=> {
		onRemove();
	}

	return (
		<Container>
			<div>
				<Header>
					<h1>{currBoard.title}</h1>
					<CircularButton
						lint='Editar titulo do Board'
						small={true}
						onClick={toggleEditing}>
						{!editing ? <MdEdit /> : <MdClose />}
					</CircularButton>
				</Header>
				{editing && (
					<BoardForm
						onSubmit={onEdit}
						isEditing={true}
						value={currBoard.title}
					/>
				)}
				<span>
					<MdTimer />
					<p>Data de Criação: 18/10/2019</p>
				</span>
				<span>
					<MdTimer />
					<p>Criado por: { currBoard.owner || 'Denilson Costa'}</p>
				</span>
				<span>
					<MdList />
					<p>Participantes: {currBoard.group || 0}</p>
				</span>
			</div>
			<div>
				<Button
					title='Entrar no Board'
					onClick={() => history.push(`/boards/${currBoard.id}`)}>
					Entrar
				</Button>
				<Button title="Apagar Board" onClick={handleDeleteBoard}>Apagar</Button>
			</div>
		</Container>
	);
}

export default BoardContentSection;
