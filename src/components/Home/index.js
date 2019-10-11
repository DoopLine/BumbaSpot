import React from 'react';

import { Container, InfoSection, Footer } from './styled';
import Button from '../Button';
export default function Home () {
    return (
        <Container>
            <InfoSection imgSrc='./static/svg/organizing_projects.svg' column={true}>
                <h1>Seja Bemvindo ao <strong style={{color: '#009688'}}>BumbaSpot</strong></h1>
                <div>
                    <Button purse={true}>Começar</Button>
                    <Button secondary={true}>Meus Boards</Button>
                </div>
            </InfoSection>
            <InfoSection imgSrc='./static/svg/preparation.svg' reverse={true}>
                <h2>Uma plataforma para gerenciar os seus projectos, tarefas e a fazeres de forma inteligênte e intuitiva.</h2>
            </InfoSection>
            <InfoSection imgSrc='./static/svg/scrum.svg'>
                <h2>Usamos SCRUM boards para a organização das tarefas</h2>
            </InfoSection>
            <Footer>
                <span>
                    <p>Made by CoffeeSync</p>
                    <p>&copy; All right reserved</p>
                </span>
                <span>
                    <p>Author: Denilson Costa</p>
                    <p>Info Number: +244 997267270</p>
                </span>
            </Footer>
        </Container>
    );
}