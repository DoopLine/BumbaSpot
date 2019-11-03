import styled from 'styled-components';
import { slidePaper } from '../../styles/animations';

export const Container = styled.article`
	position: fixed;
	top: 0;
	left: 0;
	width: 30rem;
	height: 100vh;
	max-width: 80%;
	background-color: #fff;
	box-shadow: 2px 0 5px rgba(32, 33, 36, 0.5);
	z-index: 11;
	overflow-y: overlay;
	animation: ${slidePaper} 1.3s forwards ease;
	font-size: 1rem;
	padding: 2rem 1rem;
	overflow-y: auto;

	h1,
	h2 {
		color: #00695c;
		word-break: break-word;
		padding-right: 2rem;
	}
	header {
		margin-bottom: 2rem;
		p {
			color: darkgray;
			margin-top: 1rem;
			font-size: 1.2rem;
		}
	}
`;

export const LabelSection = styled.article`
	div {
		display: flex;
		flex-wrap: wrap;
		margin: 1rem 0;
	}
`;

export const DescriptionSection = styled.article`
	p {
		font-size: 1.2rem;
		margin: 1rem 0;
		word-break: break-word;
		line-height: 1.7rem;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	button {
		margin-left: auto;
		&:nth-child(3) {
			margin-left: 1rem;
		}
	}
`;
// export const Header = styled.header`
// `;
