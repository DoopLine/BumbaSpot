import styled from 'styled-components';

export const Container = styled.label`
	display: flex;
	position: relative;
	font-size: 1.2rem;
	margin-bottom: 2rem;
	align-items: center;
	margin: 0.5rem 0;
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
