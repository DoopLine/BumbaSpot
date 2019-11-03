import styled from 'styled-components';

export const Container = styled.section`
	height: calc(100% - 6rem);
	font-size: 1rem;
	padding: 2rem;
	display: flex;
	justify-content: center;
    overflow-y: auto;

	div {
		width: 95%;
		max-width: 45rem;
		overflow-y: auto;
		/* height: fit-content; */
		h1 {
			display: inline-block;
			background-color: #009688;
			padding: 1rem;
			margin-left: -1rem;
			margin-top: 2rem;
			font-size: 2rem;
			color: white;
		}

		form {
			margin: 2rem 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			& > div {
				padding: 1rem;
			}

		}

		span {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 1rem;
			& > button {
				svg {
					font-size: 1.5rem;
					margin-right: 1rem;
				}
			}
			& > p {
				font-size: 1.5rem;
				color: darkgray;
			}

			& > *:not(:last-child) {
				margin-bottom: 1rem;
			}
		}
	}
`;
