import React from 'react';
// import BoardContext from '../Board/context';
import { Container, BackDrop } from './styled';
export default function Card({ children }) {
	return (
		<>
			<BackDrop></BackDrop>
			<Container>{children}</Container>
		</>
	);
}
