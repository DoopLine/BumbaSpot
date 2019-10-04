import styled from 'styled-components';

export const Container = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	background-color: ${({ color }) => (color ? color : '#000')};
	color: white;
	width: fit-content;
	border-radius: 0.3rem;
	margin-bottom: 0.5rem;
	margin-right: 0.5rem;

	svg {
		font-size: 1.2rem;
		margin-left: 0.5rem;
		cursor: pointer;
	}
`;
