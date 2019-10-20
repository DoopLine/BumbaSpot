import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFormState from '../../hooks/useFormState';
import { IoLogoFacebook, IoLogoGoogle } from 'react-icons/io';

import { Container } from './styled';
import ShadowWrapper from '../ShadowWrapper';
import Input from '../Input';
import Button from '../Button';
import Notification from '../Notification';

import {
	userActionTypes,
	sectionActionTypes,
} from '../../reducers/actionTypes';
import { UserContext } from '../../context/userContext';
import { SessionContext } from '../../context/sessionContext';

function SignUp() {
	const history = useHistory();
	const { users, dispatch } = useContext(UserContext);
	const { dispatch: sessionDispatch } = useContext(SessionContext);

	const [msg, setMsg] = useState('');

	const [userName, changeUserName] = useFormState();
	const [password, changePassword] = useFormState();
	const [rePassword, changeRePassword] = useFormState();

	const handleCreateUser = async e => {
		e.preventDefault();

		if (userName && password && rePassword) {
			if (password === rePassword) {
				if (!users.find(u => u.name === userName)) {
					await dispatch({
						type: userActionTypes.CREATE_USER,
						password,
						name: userName,
					});

					await sessionDispatch({
						type: sectionActionTypes.CREATE_SESSION,
						userName,
					});

					history.push('/boards');
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
						value={password}
						onChange={changePassword}
					/>
					<Input
						title='Repita a palavra passe'
						value={rePassword}
						onChange={changeRePassword}
					/>
					<Button>Cadastrar</Button>
				</form>
				<span>
					<Button>
						<IoLogoFacebook />
						Com Facebook
					</Button>
					<Button>
						<IoLogoGoogle />
						Com Google
					</Button>
					<p>Ou</p>
					<Button secondary={true}>Fazer Login</Button>
				</span>
			</ShadowWrapper>
		</Container>
	);
}

export default SignUp;
