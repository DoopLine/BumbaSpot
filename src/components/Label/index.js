import React from 'react';
import useToggle from '../../hooks/useToggle';
import { MdClose } from 'react-icons/md';
import { Container } from './styled';

export default function Label({ title, color, onClick, disable = false }) {
	
	const [ isshowing, toggleIsShowing ] = useToggle();

	return (
		<Container  color={color} title={title} onClick={toggleIsShowing} isshowing={isshowing} >
			{title}
			{isshowing && !disable && <MdClose onClick={onClick} />}
		</Container>
	);
}
