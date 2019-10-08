import React, { useContext } from 'react';
import { MdEdit, MdAdd, MdClose } from 'react-icons/md';
import useToggle from '../../hooks/useToggle';

import {
	Container,
	LabelSection,
	DescriptionSection,
	Progress,
	TaskItem,
	Header,
} from './styled';

import BoardContext from '../Board/context';

import Backdrop from '../Backdrop';
import CheckBox from '../CheckBox';
import CardForm from '../CardForm';
import LabelForm from '../LabelForm';
import CircularButton from '../CircularButton';
import Label from '../Label';

export default function CardInfoSide({ data, close }) {
	const { card, listIndex, listName } = data;
	const { editCard, addLabelToCard, removeLabelFromCard } = useContext(
		BoardContext
	);

	const [isEditing, toggleIsEditing] = useToggle();
	const [, toggleIsDeleting] = useToggle(false);
	const [hasLabelForm, toggleHasLabelForm] = useToggle();

	const handleEditCardName = (inputVal, listIndex) => {
		editCard(card.id, inputVal, listIndex);
		toggleIsEditing(false);
	};
	const handleCreateLabel = (inputVal, color) => {
		if (inputVal) {
			addLabelToCard(card.id, inputVal, color, listIndex);
			toggleHasLabelForm(false);
		}
	};
	const handleRemovingLabel = id => {
		removeLabelFromCard(card.id, id, listIndex);
		toggleIsDeleting();
	};

	return (
		<>
			<Backdrop onClick={close} />
			<Container>
				<header>
					<Header>
						<h1>{card.content}</h1>
						<CircularButton
							onClick={toggleIsEditing}
							lint='Editar titulo do card'
							small={true}>
							<MdEdit />
						</CircularButton>
					</Header>
					<p>{listName}</p>
				</header>
				{isEditing && (
					<CardForm
						listIndex={listIndex}
						onSubmit={handleEditCardName}
						initInputVal={card.content}
					/>
				)}
				<section>
					<LabelSection>
						<Header>
							<h2>Rótulos</h2>
							<CircularButton
								onClick={toggleHasLabelForm}
								lint='adicinar Rótulo'
								small={true}>
								{!hasLabelForm ? <MdAdd /> : <MdClose />}
							</CircularButton>
						</Header>
						<div>
							{!card.labels.length && (
								<Label color='lightgray' disable={true} title={'Sem rótulos'} />
							)}
							{card.labels.map(({ color, title, id }) => (
								<Label
									key={id}
									color={color}
									title={title}
									onClick={() => handleRemovingLabel(id)}
								/>
							))}
						</div>
						{hasLabelForm && <LabelForm onSubmit={handleCreateLabel} />}
					</LabelSection>
					<DescriptionSection>
						<h2>Descrição</h2>
						<p>{!card.desciption && 'Sem Descrição'}</p>
					</DescriptionSection>
					<article>
						<h2>Tarefas</h2>
						<TaskItem>
							<h4>Tarefa Nome</h4>
							<span style={{ display: 'flex' }}>
								<p style={{ marginRight: '.5rem' }}>15%</p>
								<Progress value='15' max='100'>
									15%
								</Progress>
							</span>
							<CheckBox title='titlulo da tarefa a ser executada' />
						</TaskItem>
					</article>
				</section>
			</Container>
		</>
	);
}
