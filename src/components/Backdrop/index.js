import React from 'react';

import { Container } from './styled';

export default function Backdrop({onClick, transparent = false}){
    return <Container onClick={onClick} transparent={transparent} />
}