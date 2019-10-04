import React from 'react';
import useToggle from '../../hooks/useToggle';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import uuid from 'uuid/v4';
import { Container } from './styled';

export default function CheckBox({ title, onChange, checked = false }) {
	const id = uuid();
	const [isChecked, toggleIsChecked] = useToggle(checked);
	
	const handleOnChange = (e)=>{
		toggleIsChecked();
		onChange(e);
	}

	return (
		<Container htmlFor={id}>
			<input id={id} type='checkbox' checked={isChecked} onChange={handleOnChange} />
			{!isChecked ? <MdCheckBoxOutlineBlank /> : <MdCheckBox />}
			{title}
		</Container>
	);
}
