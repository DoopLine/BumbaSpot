import styled, { css } from 'styled-components';
import {fade} from '../../styles/animations';

export const Container = styled.form`
    margin-bottom: 1rem;
	display: flex;
    flex-direction: column;
	align-items: center;
	background: #fff;
	border-radius: 1rem;
	box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    animation: ${fade} .5s forwards linear;
	height: fit-content;
    padding-bottom: .8rem;
    
    div{
        display: flex;
    }
`; 

export const ColorBox = styled.span`
    margin-right: .5rem;
    margin-left: .5rem;
    margin-bottom: .5rem;
    border-radius: 3px;
    width: 3rem;
    height: 3rem;
    background-color: ${ ({color}) => color || '#000'};
    cursor: pointer;
    transition: .2s;

    ${({active})=> active && css`
        outline: 2px solid #004d40;
    `}
`; 