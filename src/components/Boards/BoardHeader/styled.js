import styled from 'styled-components';

export const Container = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 1rem;
	border-radius: 3px;

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