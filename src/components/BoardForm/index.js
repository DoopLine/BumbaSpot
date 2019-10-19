import React from 'react';
import useFormState from '../../hooks/useFormState';
import { Container } from './styled';

import Input from '../Input';
import Button from '../Button';

function BoardForm({ isEditing = false, onSubmit, value = '' }) {
	const [title, changeTitle] = useFormState(value);

	const handleOnCreate = (e) => {
		e.preventDefault();
		if (title) {
			onSubmit(title);
		}
    };
    
	return (
		<Container onSubmit={handleOnCreate}>
			<Input title='Titulo do Board' value={title} onChange={changeTitle} />
			<Button type="submit">
				{isEditing ? 'Editar ' : 'Criar '}Board
			</Button>
		</Container>
	);
}

export default BoardForm;
