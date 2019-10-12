import styled, {css} from 'styled-components';

export const Container = styled.label`
	display: flex;
	position: relative;
	font-size: 1.2rem;
	margin-bottom: 2rem;
	align-items: center;
	margin: 0.5rem 0;
	width: fit-content;
	cursor: pointer;
	transition: text-decoration .3s ease-in;

	${({stroke})=> stroke && css`
		text-decoration: line-through;
	`}
	input {
		position: absolute;
		width: 0;
		height: 0;
	}

	svg{
		font-size: 1.5rem;
		margin-right: .5rem;
		cursor: pointer;
		transition: .5s;
	}
`;
