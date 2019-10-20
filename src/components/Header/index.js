import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';
import { Container, MainWrapper } from './styled';

import { BoardContext } from '../../context/boardContext';
import { SessionContext } from '../../context/sessionContext';

export default function Header() {
	const history = useHistory();

	const { session } = useContext(SessionContext);
	const { boards } = useContext(BoardContext);
	const getText = () => {
		const pathName = history.location.pathname;
		if (pathName === '/') return 'Página Inicial';
		if (pathName === '/signup') return 'Criar Conta';
		if (pathName === '/boards') return 'Meus Boards';
		if (pathName.includes('/boards/'))
			return boards.find(_b => _b.id === pathName.replace('/boards/', ''))
				.title;
		else return 'Error Page';
	};

	return (
		<Container>
			<MainWrapper>
				<p className='truncate' title={getText()}>
					{getText()}
				</p>
			</MainWrapper>
			<div>
				<span>
					<MdPerson />
					{/* <img
						src='./static/images/69152278_2453630424734358_4212083270524862464_o.jpg'
						alt='user'
					/> */}
					<p>{session.userName? session.userName : 'Nome de Usuário'}</p>
				</span>
			</div>
		</Container>
	);
}
