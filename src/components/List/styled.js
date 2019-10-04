import styled from 'styled-components';
import {slidePaper} from '../../styles/animations';

export const Container = styled.div`
	height: auto;
	padding: 0 1.5rem;
	flex: 0 0 32rem;
	opacity: ${({ done }) => (done ? 0.6 : 1)};
	overflow: auto;
	animation: ${slidePaper} 1s forwards ease;
	&:not(:last-child) {
		border-right: 1px solid #b2dfdb;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
		margin-top: .5rem;
		h2 {
			font-weight: 500;
			font-size: 16px;
			padding: 0 1rem;
			word-break: break-all;
			max-width: 27rem;
		}
	}
`;

export const NoCard = styled.p`
    text-align: center;
    font-size: 1.5rem;
`;
