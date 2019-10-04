import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    height: fit-content;
    padding: 1rem;
    background-color: #80cbc4;
    box-shadow: 0 0 .2rem #80cbc4;
    border-radius: .5rem;
    font-size: 1rem;
`;

export const BackDrop = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,.2);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
