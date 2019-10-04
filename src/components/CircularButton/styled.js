import styled, { css } from 'styled-components';
import { purseAnimation } from '../../styles/animations';

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3rem;
	width: 3rem;
	min-width: 3rem;
	min-height: 3rem;
	font-size: 1.6rem;
	color: #fff;
	border-radius: 50%;
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

	${({ secondary }) =>
		secondary &&
		css`
			background-color: transparent;
			color: #009688;
			box-shadow: none;
			margin-right: .5rem;
			font-size: 1.8rem;

			&:first-of-type{
				margin-left: auto;
			}
		`}

	${({ float }) =>
		float &&
		css`
			bottom: 4rem;
			right: 3rem;
			position: fixed;
			z-index: 5;
		`}

	${({ purse }) =>
		purse &&
		css`
			animation: ${purseAnimation} 2s infinite;
		`}

	${({ small }) =>
		small &&
		css`
			height: 2rem;
			width: 2rem;
			min-width: 2rem;
			min-height: 2rem;
			font-size: 1.2rem;
		`}
`;
