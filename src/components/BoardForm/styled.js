import styled from 'styled-components';
import { fade } from '../../styles/animations';

export const Container = styled.form`
	background: #fff;
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    animation: ${fade} .5s forwards linear;
	margin-bottom: 1rem;
    width: fit-content;

    &>*:not(:last-child){
        margin-bottom: 1rem;
    }

    label{
        color: #00695c;
    }
`;


