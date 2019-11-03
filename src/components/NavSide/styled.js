import styled from 'styled-components';

export const Image = styled.img`
	height: 5rem;
	width: 5rem;
	object-fit: cover;
	color: inherit;
	align-self: center;
	margin-bottom: 1rem;
`;
export const Container = styled.nav`
	background-color: #00695c;
	flex: 0 0 6rem;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 2rem 0;
	padding-top: 1rem;

	@media only screen and (max-width: 425px) {
		/* display: none; */
	}

	h1 {
		align-self: center;
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	ul {
		font-size: 1rem;
		color: #fff;
		margin-bottom: auto;

		&:last-child {
			margin-bottom: 0;
			border-top: 1px solid rgba(0, 0, 0, 0.2);
		}

		li {
			margin: 0.5rem 0;

			.active {
				border-left: 2px solid white;
				background-color: rgba(0, 0, 0, 0.2);
			}

			a {
				display: flex;
				padding: 0.5rem 0;
				justify-content: center;
				font-size: 2rem;
				&:hover {
					background-color: #009688;
				}
			}
		}
	}
`;
