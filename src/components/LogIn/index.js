import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFormState from '../../hooks/useFormState';
import {findUserByName} from '../../modules/storage';
import { IoLogoFacebook, IoLogoGoogle } from 'react-icons/io';

import { Container } from './styled';
import ShadowWrapper from '../ShadowWrapper';
import Input from '../Input';
import Button from '../Button';
import Notification from '../Notification';

import {
	sessionActionTypes,
} from '../../modules/actionTypes';
import { SessionContext } from '../../context/sessionContext';

function LogIn() {
	const history = useHistory();
	const { dispatch: sessionDispatch } = useContext(SessionContext);

	const [msg, setMsg] = useState('');

	const [userName, changeUserName] = useFormState();
	const [password, changePassword] = useFormState();

	const handleCreateUser = async e => {
		e.preventDefault();
 
		if (userName && password) {
				const checkUser = findUserByName(userName);
				if (checkUser) {
					if(checkUser.password === password){
						await sessionDispatch({
							type: sessionActionTypes.CREATE_SESSION,
							user: checkUser
						});
						history.push('/');
					}else setMsg('Palavra passe incorreta.');
				} else setMsg('Este nome de usuário não existe!.');
		} else setMsg('Preencha todos os campos, porfavor.');
	};

	return (
		<Container>
			{msg && (
				<Notification err={true} onClose={() => setMsg('')} autoClose={true}>
					{msg}
				</Notification>
			)}
			<ShadowWrapper>
				<h1>Iniciar Sessão</h1>

				<form onSubmit={handleCreateUser}>
					<Input
						title='Nome de usuário'
						value={userName}
						onChange={changeUserName}
					/>
					<Input
						title='Palavra passe'
						type="password"
						value={password}
						onChange={changePassword}
					/>
					<Button>Iniciar Sessão</Button>
				</form>
				<span>
					<Button disabled={true}>
						<IoLogoFacebook />
						Com Facebook
					</Button>
					<Button disabled={true}>
						<IoLogoGoogle />
						Com Google
					</Button>
					<p>Ou</p>
					<Button secondary={true} onClick={()=> history.push('/signup')}>Registrar-se</Button>
				</span>
			</ShadowWrapper>
		</Container>
	);
}

export default LogIn;
