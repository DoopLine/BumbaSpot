import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import uuid from 'uuid/v4';
import { Container } from './styled';

export default function CheckBox({ id = uuid(), title, onChange, checked = false, stroke=false }) {
	return (
		<Container htmlFor={id} stroke={stroke}>
			<input id={id} type='checkbox' checked={checked} onChange={onChange} />
			{!checked ? <MdCheckBoxOutlineBlank /> : <MdCheckBox />}
			{title}
		</Container>
	);
}
