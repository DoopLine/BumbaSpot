import React, { useContext } from 'react';
import useToggle from '../../hooks/useToggle';
import { useHistory } from 'react-router-dom';
import { MdPerson, MdMenu } from 'react-icons/md';
import { Container, MainWrapper } from './styled';

//Components
import UserActionBox from '../UserActionBox';
import CircularButton from '../CircularButton';

import { sessionActionTypes } from '../../modules/actionTypes';
import { SessionContext } from '../../context/sessionContext';

export default function Header({ toggleShowSideNav }) {
	const history = useHistory();

	const [showUserActions, toggleShowUserActions] = useToggle();

	const { session, dispatch } = useContext(SessionContext);

	const getText = () => {
		const pathName = history.location.pathname;
		if (pathName === '/') return 'Página Inicial';
		if (pathName === '/signup') return 'Criar Conta';
		if (pathName === '/boards') return 'Meus Boards';
		if (pathName.includes('/boards/'))
			return session.user.boards.find(
				_b => _b.id === pathName.replace('/boards/', '')
			).title;
		else return 'Error Page';
	};

	const handleLogOut = () => {
		dispatch({ type: sessionActionTypes.DELETE_SESSION });
		history.push('/');
	};

	return (
		<Container>
			<MainWrapper>
				<CircularButton
					onClick={toggleShowSideNav}
					lint='Alternar barra de navegação'
					secondary={true}>
					<MdMenu />
				</CircularButton>
				<p className='truncate' title={getText()}>
					{getText()}
				</p>
			</MainWrapper>
			<div>
				<button
					onClick={toggleShowUserActions}
					onBlur={() => toggleShowUserActions(false)}>
					<MdPerson />
					{/* <img
						src='./static/images/69152278_2453630424734358_4212083270524862464_o.jpg'
						alt='user'
					/> */}
					<p>
						{session.user && session.user.name
							? session.user.name
							: 'Nome de Usuário'}
					</p>
					{showUserActions && (
						<UserActionBox
							userName={
								session.user && session.user.name
									? session.user.name
									: undefined
							}
							actions={{
								logOut: handleLogOut,
								logIn: () => history.push('/login'),
							}}
						/>
					)}
				</button>
			</div>
		</Container>
	);
}
