import styled, {css} from 'styled-components';
import { fade } from '../../styles/animations';

export const Container = styled.div`
	background-color: #009688;
	border-radius: 4px;
	padding: 1.25rem 2.5rem 1.25rem 1.5rem;
    color: white;
    height: fit-content;
    font-size: 1.3rem;
    animation: ${fade} .3s forwards .1s ease-in;
    position: absolute;
    z-index: 10;


    ${({err})=> err && css`
	    background-color: #ff3860;
    `}
    
	strong {
        color: currentColor;
	}

	svg {
        position: absolute;
		right: 0.5rem;
		top: 0.5rem;
        font-size: 1.5rem;
        background-color: rgba(10,10,10,.2);
        border-radius: 50%;
        cursor: pointer;
        padding: .1rem;

        &:hover{
            background-color: rgba(10,10,10,.3);
        }
	}
`;
