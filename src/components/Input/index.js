import React from 'react';
import uuid from 'uuid/v4';

import { Container } from './styled';

export default function Input({
	title,
	multiline = false,
	onChange,
	value= '',
	hasError = false,
}) {
    const id = uuid();
	return (
		<Container hasError={hasError}>
			<label htmlFor={id}>{title}</label>
			{multiline ? (
				<textarea id={id} value={value} onChange={onChange}/>
			) : (
				<input type='text' value={value}  id={id} onChange={onChange}/>
			)}
		</Container>
	);
}
