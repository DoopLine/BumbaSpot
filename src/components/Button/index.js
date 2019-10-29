import React from 'react';

import { Container } from './styled';

export default function Button({
	onClick,
	children,
	purse = false,
	lint = '',
	small = false,
	type = 'text',
	secondary= false,
	disabled = false
}) {
	return (
		<Container onClick={onClick} disabled={disabled}  purse={purse} title={lint} small={small} type={type} secondary={secondary}>
			{children}
		</Container>
	);
}
