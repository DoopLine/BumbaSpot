import {keyframes} from 'styled-components';

export const fade = keyframes`
     from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const slideFade = keyframes`
     from{
        transform: translateY(-2rem);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`;

export const slidePaper = keyframes`
    0%{
        transform: translate(-50vw, -90%);
    }
    50%{
        transform: translate(0, -90%);
    }
    99%{
        transform: translate(0);
    }
    100%{
        transform: none;
    }
`;

export const purseAnimation = keyframes`
	0%{
		box-shadow: 0 0 0 0 #009688;
	}
	70%{
		box-shadow: 0 0 0 1.5rem rgba(204, 169, 44, 0);
	}
	100%{
		box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
	}

`;