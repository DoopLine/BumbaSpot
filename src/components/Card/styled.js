import styled, { css } from 'styled-components';
import { fade } from '../../styles/animations';

export const Container = styled.div`
	font-size: 1.3rem;
	position: relative;
	background-color: #80cbc4;
	border-radius: 0.5rem;
	margin-bottom: 1rem;
	padding: 1.5rem;
	box-shadow: 0 0 0.2rem #80cbc4;
	border-top: 1.5rem solid #b2dfdb;
	cursor: grab;
	animation: ${fade} .5s forwards ease;

	header {
		position: absolute;
		top: -2.2rem;
		left: 1.5rem;
	}
	img {
		width: 2rem;
		height: 2rem;
		border-radius: 0.2rem;
		margin-top: 0.5rem;
	}
	p {
		font-weight: 500;
		line-height: 2rem;
		word-break: break-word;
	}

	${({ isDragging }) =>
		isDragging &&
		css`
			border: 0.2rem dashed #80cbc4;
			padding-top: 3rem;
			/* border-radius: 0; */
			background-color: transparent;
			box-shadow: none;
			cursor: grabbing !important;

			p,
			img,
			header {
				opacity: 0;
			}
		`}
`;

export const Label = styled.span`
	width: 1rem;
	height: 1rem;
	border-radius: 0.2rem;
	margin-right: .5rem;
	display: inline-block;
	background-color: ${props => props.color};
	cursor: default;
`;
