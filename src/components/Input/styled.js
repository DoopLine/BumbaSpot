import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	label {
		margin-bottom: .7rem;
		font-size: 1.1rem;
		font-weight: 500;
	}

	${({ hasError }) =>
		hasError &&
		css`
			input,
			textarea {
				background: #ff000021 !important;
				box-shadow: 0 0 0.2rem red !important;
			}
		`}

	input,
	textarea {
		border-radius: 0.3rem;
		border: none;
		padding: 0.5rem 1rem;
		background-color: #00968870;
		outline: none;
		color: #004d40;
		box-shadow: 0 0 0.2rem #00968870;
		transition: 0.3s;
		font-family: inherit;
		&:focus {
			box-shadow: 0 0 0.5rem #004d40;
		}
	}
`;
