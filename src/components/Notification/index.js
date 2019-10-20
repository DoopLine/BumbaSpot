import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

import { Container } from './styled';

export default ({
	err = false,
	onClose,
    children,
    autoClose = false
}) => {

    let timeout;
    
	if (autoClose) {
        console.log('init');
		timeout = setTimeout(() => {
            console.log('timeout');
            onClose();
		}, 5000);
    }
    
	useEffect(() => {
		return clearTimeout(timeout);
	});

	return (
		<Container err={err}>
			<MdClose onClick={onClose} />
			{children}
		</Container>
	);
};
