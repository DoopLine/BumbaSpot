import styled from 'styled-components';
import { fade } from '../../styles/animations';

export const Container = styled.div`
    position: relative;
	padding: 1rem;
	/* background-image: linear-gradient(45deg, #009688, #00695c); */
	transition: box-shadow 0.25s;
	border-radius: 3px;
	/* height: fit-content; */
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
		0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
	animation: ${fade} .5s ease-in forwards;
`;