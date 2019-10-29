import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 6rem;
	right: 1rem;
	font-size: 1rem;
	color: #00695c;
	z-index: 5;
	cursor: default;

	::before {
		position: absolute;
		background-color: white;
		top: -.7rem;
		left: 8rem;
		content: '';
		width: 2rem;
		height: 2rem;
		transform: rotate(45deg);
	}

	> div {
		background-color: white;

		h3 {
			margin-bottom: 1rem;
			max-width: 15rem;
		}
	}
`;

export const ListAction = styled.ul`
	margin: 0 -1rem -1rem;

	> li {
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 1rem;

		:hover {
			background-color: #eee;
		}

		> *:first-child {
			margin-right: 1rem;
			font-size: 2rem;
		}
	}
`;
