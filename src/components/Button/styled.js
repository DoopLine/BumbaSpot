import styled, { css } from 'styled-components';
import { purseAnimation } from '../../styles/animations';

export const Container = styled.button`

  user-select: none;
  appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  line-height: 1.5;
  padding: .5em 1em;
  position: relative;
  vertical-align: top;
  margin: 0;
  background-color: #009688;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  white-space: nowrap;

  &:focus, &:active{
	outline: none;
  }

  &:hover{
	  box-shadow: 0 0 0.3rem #004d40;
  }

  &:focus{
	box-shadow: 0 0 0.5rem #004d40;
  }

  &:disabled{
	cursor: not-allowed;
	box-shadow: none;
    opacity: .5;
  }

	${({ purse }) =>
		purse &&
		css`
			animation: ${purseAnimation} 2s infinite;
		`}

	${({ small }) =>
		small &&
		css`
			font-size: 1.2rem;
		`}
	${({ secondary }) =>
		secondary &&
		css`
			color: #009688;
			background-color: transparent;
			border-bottom: 0.13rem solid #009688;
			box-shadow: none;
		`}
`;
