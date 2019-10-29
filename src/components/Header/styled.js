import styled from 'styled-components';

export const Container = styled.div`
	height: 6rem;
	padding: 0 3rem;
	background-color: #009688;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 -3px 5px 1px black;

	p {
		letter-spacing: 0.05rem;
		font-weight: 700;
		font-size: 1rem;
	}

	button {
		display: flex;
		align-items: center;
		background-color: #00695c;
		border-radius: 20px;
		color: lightgray;
		padding-right: 1rem;
		cursor: pointer;
		transition: 0.2s;
		border: none;
		outline: none;

		@media only screen and (max-width: 500px) {
			padding-right: 0;
			> p {
				display: none;
			}
			> img,
			svg {
				margin-right: 0 !important;
			}
		}

		> p {
			&:hover {
				color: #fff;
			}
		}

		> svg {
			width: 3rem;
			height: 3rem;
			background-color: #004d40;
			border-radius: 50%;
			margin-right: 1rem;
			&:hover {
				color: #fff;
			}
		}

		> img {
			height: 3rem;
			width: 3rem;
			border-radius: 50%;
			object-fit: cover;
			margin-right: 1rem;
		}
	}
`;
export const MainWrapper = styled.div`
	display: flex;
	align-items: center;
	max-width: 100%;
	p {
		margin-right: 1rem;
		font-size: 1.2rem;
		color: #fff;
	}
`;
