import styled from 'styled-components';
import { fade } from '../../styles/animations';

export const Container = styled.div`
	display: flex;
	padding: 3rem 0;
	height: calc(100% - 6rem);
	overflow-x: auto;
	position: relative;
`;

export const EmptyList = styled.div`
	background: url(${({imgSrc}) => imgSrc});
	background-size: 30rem;
	background-repeat: no-repeat;
	background-position: center 25%;
	width: 100%;
	font-size: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	color: darkgray;
	height: 33rem;
	animation: ${fade} .3s forwards ease;
`;
