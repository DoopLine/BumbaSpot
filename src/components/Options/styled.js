import styled from 'styled-components';
import { slideFade } from '../../styles/animations';

export const Container = styled.span`
	position: relative;
    z-index: 3;
	ul {
		position: absolute;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
			0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
		font-size: 1.2rem;
		top: 0;
		right: 0;
		width: max-content;
		background-color: #fff;
        animation: ${slideFade} .3s forwards ease-in-out;
		
        li{
            padding: 1rem;
            cursor: pointer;

            &:hover{
                background-color: #eee;
            }
        }
	}
`;
