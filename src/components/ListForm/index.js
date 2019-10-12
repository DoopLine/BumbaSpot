import React from 'react';
import useFormState from '../../hooks/useFormState';
import { Container } from './styled';

import Backdrop from '../Backdrop';
import Input from '../Input';
import CheckBox from '../CheckBox';
import Button from '../Button';

function ListForm({
	float,
	closeForm,
	isEditing = false,
	onSubmit,
	checked = false,
	value = '',
}) {
	const [title, changeTitle] = useFormState(value);
	const [isChecked, changeIsChecked] = useFormState(checked, 'checkbox');

	const handleOnCreate = ()=> {
		if(title){
			onSubmit(title, isChecked);
		}
	}
	return (
		<>
			{!isEditing && <Backdrop onClick={closeForm} />}
			<Container float={float}>
				<Input title='Nome da lista' value={title} onChange={changeTitle} />
				<CheckBox
					title='Lista Estática'
					checked={isChecked}
					onChange={changeIsChecked}
				/>
				<Button onClick={handleOnCreate}>
					{isEditing ? 'Editar ' : 'Criar '}Lista
				</Button>
			</Container>
		</>
	);
}

export default ListForm;
