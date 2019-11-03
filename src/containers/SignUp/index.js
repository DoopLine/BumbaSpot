import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import dispatch from '../../reducers/userReducer';
import useFormState from '../../hooks/useFormState';
import { IoLogoFacebook, IoLogoGoogle } from 'react-icons/io';
import { findUserByName } from '../../modules/storage';


import { Container } from './styled';
import ShadowWrapper from '../../components/ShadowWrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Notification from '../../components/Notification';

import {
	userActionTypes,
} from '../../modules/actionTypes';

function SignUp() {
	const history = useHistory();

	const [msg, setMsg] = useState('');

	const [userName, changeUserName] = useFormState();
	const [password, changePassword] = useFormState();
	const [rePassword, changeRePassword] = useFormState();

	const handleCreateUser = async e => {
		e.preventDefault();

		if (userName && password && rePassword) {
			if (password === rePassword) {
				if (!findUserByName(userName)) {
					await dispatch({
						type: userActionTypes.CREATE_USER,
						password,
						name: userName,
					});
					history.push('/login');
				} else setMsg('Este nome de usuário já existe! porfavor tente outro.');
			} else
				setMsg('Verifique se a palavra passe e a de confirmação são iguais!');
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
				<h1>Registrar-se</h1>

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
					<Input
						title='Repita a palavra passe'
						type="password"
						value={rePassword}
						onChange={changeRePassword}
					/>
					<Button>Cadastrar</Button>
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
					<Button secondary={true} onClick={() => history.push('/login')}>
						Fazer Login
					</Button>
				</span>
			</ShadowWrapper>
		</Container>
	);
}

export default SignUp;
