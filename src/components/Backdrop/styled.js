import styled, {css} from 'styled-components';
import {fade} from '../../styles/animations';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 2;
    animation: ${fade} .5s forwards linear;

	${({transparent})=> transparent && css`
		background-color: rgba(0, 0, 0, 0);
	`}
`;