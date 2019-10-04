import styled, { css } from 'styled-components';
import { fade } from '../../styles/animations';

export const Container = styled.div`
	background: #fff;
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    animation: ${fade} .5s forwards linear;
	margin-bottom: 1rem;

	${({ float }) =>
		float &&
		css`
			position: fixed;
			bottom: 5rem;
			right: 5rem;
			z-index: 3;
		`}
`;


