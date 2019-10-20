import React from 'react';

import { Container } from './styled';

export default function Button({
	onClick,
	children,
	purse = false,
	lint = '',
	small = false,
	type = 'text',
	secondary= false
}) {
	return (
		<Container onClick={onClick} purse={purse} title={lint} small={small} type={type} secondary={secondary}>
			{children}
		</Container>
	);
}
