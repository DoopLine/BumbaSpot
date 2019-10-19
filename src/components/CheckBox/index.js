import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import uuid from 'uuid/v4';
import { Container } from './styled';

export default function CheckBox({ id = uuid(), title, onChange, checked = false, lineThrough = false }) {
	return (
		<Container htmlFor={id} lineThrough={lineThrough}>
			<input id={id} type='checkbox' checked={checked} onChange={onChange} />
			{!checked ? <MdCheckBoxOutlineBlank /> : <MdCheckBox />}
			{title}
		</Container>
	);
}
