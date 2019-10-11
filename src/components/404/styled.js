import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
    height: 88%;

	h1,
	h2 {
		color: #009688;
	}
    h1{
        font-size: 10rem;;
    }
    & > *:not(:last-child){
        margin-bottom: 2rem;
    }
`;
