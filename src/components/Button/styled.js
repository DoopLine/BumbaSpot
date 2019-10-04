import styled, { css } from 'styled-components';
import { purseAnimation } from '../../styles/animations';

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.2rem;
	width: fit-content;
	height: fit-content;
	color: #fff;
	padding: .5rem 1rem;
	border-radius: .5px;
	background-color: #009688;
	border: 0;
	cursor: pointer;
	box-shadow: 0 0 0.2rem #004d40;
	transition: 0.2s;
	outline: none;
	&:hover,
	&:focus {
		box-shadow: 0 0 0.5rem #004d40;
	}

	${({ purse }) =>
		purse &&
		css`
			animation: ${purseAnimation} 2s infinite;
		`}

	${({ small }) =>
		small &&
		css`
			font-size: 1.2rem;
		`}
	${({ secondary }) =>
		secondary &&
		css`
			color: #009688;
			background-color: transparent;
			border: .5rem solid #009688;
		`}
`;
