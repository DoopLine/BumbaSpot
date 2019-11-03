import React, { useEffect } from 'react';
import { MdDone } from 'react-icons/md';
import useToggle from '../../hooks/useToggle';
import useFormState from '../../hooks/useFormState';

import Input from '../Input';
import CircularButton from '../CircularButton';

import { Container, WrapperFix } from './styled';

export default function CardForm({
	onSubmit,
	initInputVal = '',
	keyName,
	info,
}) {
	const [title, changeTitle, resetTitle] = useFormState(initInputVal);
	const [error, toggleError] = useToggle();

	const handleAddCard = () => {
		if (title) {
			onSubmit(title, keyName);
			resetTitle();
		}
	};

	useEffect(() => {
		if (title) {
			toggleError(false);
			return;
		}
		toggleError(true);
		// eslint-disable-next-line
	}, [title]);

	return (
		<Container>
			<Input
				title={info}
				value={title}
				multiline={true}
				onChange={changeTitle}
				hasError={error}></Input>
			<WrapperFix>
				<CircularButton onClick={handleAddCard}>
					<MdDone />
				</CircularButton>
			</WrapperFix>
		</Container>
	);
}
