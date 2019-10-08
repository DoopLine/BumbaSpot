import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root, .wrapper{
        font: 62.5% 'helvetica', sans-serif;
        height: 100%;
    }

    html{
        @media only screen and (max-width: 778px){
            font-size: 52.5%;
        }
    }
    #root{
        display: flex;
        max-width: 120rem;
    margin: auto;
    box-shadow: 0 0 0.5rem;
    }
    .wrapper{
        width: 100%;
        overflow: auto;
    }
    body{
        background-color: #FFF;
        color: #004d40;
        -webkit-font-smoothing: antialiased !important;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: currentColor;
    }

    .truncate{
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
