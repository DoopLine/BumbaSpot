import styled from 'styled-components';

export const Container = styled.section`
	font-size: 1rem;
	height: calc(100% - 6rem);
	overflow-x: auto;
	//temporario
	color: #fff;
	padding: 2rem;
`;

export const BoardGrid = styled.article`
	display: flex;
	overflow-x: auto;
	padding: 1rem 0;

	> h1 {
		color: #00695c;
		font-size: 2rem;
		text-align: center;
		width: 100%;
	}

	& > *:not(:last-child) {
		margin-right: 1rem;
	}
`;

export const BoardCard = styled.div`
	position: relative;
	padding: 1rem;
	background-image: linear-gradient(45deg, #009688, #00695c);
	transition: box-shadow 0.25s;
	border-radius: 5px;
	min-width: 20rem;
	cursor: pointer;
	transition: margin 0.5s ease;
	height: fit-content;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
		0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

	/* &:hover {
		
	} */

	h1 {
		line-height: 22px;
		margin-bottom: 1rem;
	}

	& div {
		border-top: 1px solid rgba(160, 160, 160, 0.2);
		position: relative;
		padding-top: 1rem;
		display: flex;
		justify-content: space-between;

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

export const BoardHeader = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 2rem;
	/* background-color: #009688; */
	padding: 1rem;
	border-radius: 3px;
	box-shadow: 0 0 5px 0px #00695c38;

	> p {
		color: #00695c;
		width: 35rem;
		font-size: 1.5rem;
		margin-right: 1rem;
		margin-bottom: 1rem;
	}

	> div {
		display: flex;
		align-items: baseline;
		& > *:not(:last-child) {
			margin-right: 1rem;
		}
	}
`;

