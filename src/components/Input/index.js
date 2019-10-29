import React from 'react';
import uuid from 'uuid/v4';

import { Container } from './styled';

export default function Input({
	title,
	multiline = false,
	onChange,
	value= '',
	hasError = false,
	type = 'text'
}) {
    const id = uuid();
	return (
		<Container hasError={hasError}>
			<label htmlFor={id}>{title}</label>
			{multiline ? (
				<textarea id={id} value={value} onChange={onChange}/>
			) : (
				<input type={type} value={value}  id={id} onChange={onChange}/>
			)}
		</Container>
	);
}
