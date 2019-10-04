import React, { useEffect } from 'react';
import {MdDone} from 'react-icons/md';
import useToggle from '../../hooks/useToggle';
import useFormState from '../../hooks/useFormState';

import Input from '../Input';
import CircularButton from '../CircularButton';

import { Container, WrapperFix } from './styled';

export default function CardForm({ listIndex, onSubmit, initInputVal = '' }) {
	const [title, changeTitle, resetTitle] = useFormState(initInputVal);
	const [error, toggleError] = useToggle();

	const handleAddCard = () => {
		if (title) {
			onSubmit(title, listIndex);
			resetTitle();
		} else {
		}
	};

	useEffect(() => {
		if (title) {
			toggleError(false);
		} else {
			toggleError(true);
		}
	}, [title]);

	return (
		<Container>
			<Input
				title='Descreva a sua tarefa'
				value={title}
				multiline={true}
				onChange={changeTitle}
				hasError={error}></Input>
			<WrapperFix>
				<CircularButton onClick={handleAddCard}>
					<MdDone/>
				</CircularButton>
			</WrapperFix>
		</Container>
	);
}
