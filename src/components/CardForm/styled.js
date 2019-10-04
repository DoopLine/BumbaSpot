import styled from 'styled-components';
import { fade } from '../../styles/animations';

export const Container = styled.div`
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	background: #fff;
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    animation: ${fade} .5s forwards linear;
	height: fit-content;
`;

export const WrapperFix = styled.span`
	margin-left: 1rem;
	margin-top: 1.6rem;
`;