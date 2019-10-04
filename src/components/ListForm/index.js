import React from 'react';

import { Container } from './styled';

import Backdrop from '../Backdrop';
import Input from '../Input';
import CheckBox from '../CheckBox';
import Button from '../Button';

export default function ListForm({
	float,
	setInputVal,
	setCheckVal,
	closeForm,
	isEditing = false,
	onSubmit,
	isStatic = false,
	value = ''
}) {
	return (
		<>
			{!isEditing && <Backdrop onClick={closeForm} />}
			<Container float={float}>
				<Input title='Nome da lista' value={value} onChange={setInputVal} />
				<CheckBox title='Lista Estática' checked={isStatic} onChange={setCheckVal} />
				{isEditing && <Button onClick={onSubmit}>Editar</Button>}
			</Container>
		</>
	);
}
