import styled from 'styled-components';

export const Container = styled.article`
	& > p {
		margin: 1rem 0;
		font-size: 1.2rem;
	}
`;

export const TaskItem = styled.div`
	& > * {
		margin: 1rem 0;
	}
`;

export const Progress = styled.progress`
	-webkit-appearance: none;
	border: none;
	border-radius: 290486px;
	display: block;
	height: 1rem;
	overflow: hidden;
	padding: 0;
	width: 100%;

	&::-webkit-progress-bar {
		background-color: #00968870;
	}

	&::-webkit-progress-value {
		background-color: #009688;
	}
`;