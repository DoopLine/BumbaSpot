import styled, { css } from 'styled-components';

const sm = '520px';
const md = '600px';

export const Container = styled.main`
	padding: 2rem;
	padding-top: 0;
	height: calc(100% - 6rem);
	overflow-y: auto;
`;

export const Footer = styled.footer`
	margin: 0 -2rem -2rem -2rem;
	height: fit-content;
	padding: 1rem;
	display: flex;
	align-items: center;
	background-color: #009688;
	justify-content: space-between;
	color: #fff;
	font-size: 1.1rem;
	span {
		display: flex;
		flex-direction: column;

		p:first-child {
			margin-bottom: 1rem;
		}
	}
`;

export const InfoSection = styled.article`
	display: flex;
	background-image: url(${props => props.imgSrc});
	height: 80vh;
	background-size: 37rem;
	background-repeat: no-repeat;
	justify-content: flex-end;
	font-size: 2rem;
	align-items: center;
	background-position-y: center;

	@media only screen and (max-width: ${sm}) {
		justify-content: flex-start;
		background-position-y: bottom;
		background-position-x: center;
		align-items: flex-start;
		margin-bottom: 10rem;
		background-size: 27rem;
		height: 40rem;
	}
	@media only screen and (max-width: ${md}) {
		background-size: 27rem;
	}

	${({ reverse }) =>
		reverse &&
		css`
			background-position-x: right;
			justify-content: flex-start;
		`}

	${({ column }) =>
		column &&
		css`
			flex-direction: column;
			align-items: flex-end;
			justify-content: center;

			@media only screen and (max-width: ${sm}) {
				align-items: center;
				padding: 3rem;
			}
		`}

    h1, h2 {
		width: 45%;
		text-align: center;

		@media only screen and (max-width: ${md}) {
			width: 60%;
		}
		@media only screen and (max-width: ${sm}) {
			width: 100%;
			/* margin: 2rem 0; */
		}
	}

	div {
		display: flex;
		width: 45%;
		justify-content: center;
		margin: 3rem 0px;

		button {
			margin: 0 1rem;
		}
	}
`;
