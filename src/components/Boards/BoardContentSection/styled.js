import styled from 'styled-components';

export const Container = styled.article`
	display: flex;
	padding: 1rem;
	border-radius: 3px;
	color: #00695c;

	>div {
		display: flex;
		flex-direction: column;
		font-size: 1.2rem;

		&:first-child {
			width: 80%;
			border-right: 1px solid rgba(160, 160, 160, 0.2);
			margin-right: 1rem;
		}

		&:last-child{
			align-self: center;
			margin: 0 auto;
		}

		>*:not(:last-child){
			margin-bottom: 1rem;
		}

		span {
			display: flex;

			&:not(:last-child) {
				margin-right: 1rem;
			}

			svg {
				margin-right: 0.5rem;
			}
		}
	}
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-right: 2rem;
	/* button {
		margin-left: auto;
		&:nth-child(3) {
			margin-left: 1rem;
		}
	} */
`;