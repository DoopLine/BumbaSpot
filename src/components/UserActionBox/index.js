import React from 'react';
import { MdAccountCircle, MdExitToApp } from 'react-icons/md';

import { Container, ListAction } from './styled';
//Components
import ShadowWrapper from '../ShadowWrapper';

const actionsType = {
	logOut: null,
	myAccount: null,
	logIn: null,
};

export default ({ userName, actions = actionsType }) => {
	return (
		<Container>
			<ShadowWrapper>
				<h3 className='truncate'>{userName || 'Usuário'}</h3>
				<ListAction>
					<li onClick={()=> userName ? null : actions.logIn()}>
						<MdAccountCircle />
						{userName ? <p>Minha Conta</p> : <p>Iniciar Sessão</p>}
					</li>
					{userName && (
						<li onClick={actions.logOut}>
							<MdExitToApp />
							<p>Terminar Sessão</p>
						</li>
					)}
				</ListAction>
			</ShadowWrapper>
		</Container>
	);
};
