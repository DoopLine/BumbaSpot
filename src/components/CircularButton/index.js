import React from 'react';

import { Container } from './styled';

export default function CircularButton({
	onClick,
	children,
	float = false,
	purse = false,
	lint = '',
    small = false,
    secondary = false
}) {
	return (
		<Container
			onClick={onClick}
			float={float}
			purse={purse}
			title={lint}
			small={small}
            secondary={secondary}>
			{children}
		</Container>
	);
}
