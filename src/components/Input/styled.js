import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	label {
		margin-bottom: 0.7rem;
		font-size: 1.3rem;
		font-weight: 500;
	}

	${({ hasError }) =>
		hasError &&
		css`
			input,
			textarea {
				border-color: #ff3860 !important;
				box-shadow: 0 0 0 0.125em #ff3860 !important;
			}
		`}

	input,
	textarea {
		/* border-radius: 0.3rem;
		border: none;
		padding: 0.5rem 1rem;
		background-color: #00968870;
		outline: none;
		color: #004d40;
		box-shadow: 0 0 0.2rem #00968870;
		&:focus {
			box-shadow: 0 0 0.5rem #004d40;
		} */

		transition: 0.3s;
		font-family: inherit;
		-moz-appearance: none;
		-webkit-appearance: none;
		align-items: center;
		border: 1px solid transparent;
		border-radius: 4px;
		box-shadow: none;
		display: inline-flex;
		font-size: 1rem;
		height: 2.25em;
		justify-content: flex-start;
		line-height: 1.5;
		padding-bottom: calc(0.375em - 1px);
		padding-left: calc(0.625em - 1px);
		padding-right: calc(0.625em - 1px);
		padding-top: calc(0.375em - 1px);
		position: relative;
		vertical-align: top;
		margin: 0;
		background-color: white;
		border-color: #00968870;
		color: #363636;
		box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
		max-width: 100%;
		width: 100%;

		&:focus,
		&:active {
			outline: none;
			border-color: #00968870;
			box-shadow: 0 0 0 0.125em #00968870;
		}

		&:disabled {
			cursor: not-allowed;
			background-color: whitesmoke;
			border-color: whitesmoke;
			box-shadow: none;
			color: #7a7a7a;
			&::placeholder {
				color: rgba(122, 122, 122, 0.3);
			}
		}
		&::placeholder {
			color: rgba(54, 54, 54, 0.3);
		}
	}
`;
