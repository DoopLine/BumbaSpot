import React from 'react';
import { MdHome, MdList, MdForum, MdHelp } from 'react-icons/md';

import { Container } from './styled';
export default function NavSide() {
    return (
        <Container>
            <h1>TSP</h1>
            <ul>
                <li>
                    <a href="*" title="Início">
                        <MdHome/>
                    </a>
                </li>
                <li>
                    <a href="*" title="Listas">
                        <MdList/>
                    </a>
                </li>
                <li>
                    <a href="*" title="Perguntas e respostas">
                        <MdForum/>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="*" title="Sobre">
                        <MdHelp/>
                    </a>
                </li>
            </ul>
        </Container>
    );
}