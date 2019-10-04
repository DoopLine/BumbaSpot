import styled from 'styled-components';

export const Container = styled.nav`
	background-color: #00695c;
	flex: 0 0 6rem;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
    padding: 2rem 0;

	@media only screen and (max-width: 425px){
		display: none;
	}
    
    h1 {
        align-self: center;
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	ul {
		font-size: 1rem;
        color: #fff;
        margin-bottom: auto;
        
        &:last-child {
            margin-bottom: 0;
			border-top: 1px solid rgba(0, 0, 0, 0.2);
		}

		li {
			margin: 0.5rem 0;
            /* padding: 1rem 0; */
            
			a {
                display: flex;
                padding: .5rem 0;
                justify-content: center;
				font-size: 2rem;
				&:hover {
					background-color: #009688;
				}
			}
		}
        
		
	}
`;
