import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styled';
import Button from '../Button';

export default ()=>{

    return (
        <Container>
            <h1>404</h1>
            <h2>Página não Encontrada</h2>
            <Link to="/">
                <Button>Ir Para o Início</Button>
            </Link>
        </Container>
    );


}