import React from 'react';
import useToggle from '../../hooks/useToggle';
import { MdMoreVert } from 'react-icons/md';

import { Container } from './styled';

import CircularButton from '../CircularButton';
import Backdrop from '../Backdrop';

export default function Options({ options, small= false }) {
	const [isOpened, toogleIsOpened] = useToggle();

	return (
		<>
			{isOpened && (
				<Backdrop transparent={true} onClick={() => toogleIsOpened()} />
			)}
			<Container>
				<CircularButton secondary={true} lint='Opções' onClick={toogleIsOpened} small={small}>
					<MdMoreVert />
				</CircularButton>
				{isOpened && (
					<ul>
						{options.map(({ name, handler }) => (
							<li key={name} onClick={()=> {handler(); toogleIsOpened()}}>{name}</li>
						))}
					</ul>
				)}
			</Container>
		</>
	);
}
