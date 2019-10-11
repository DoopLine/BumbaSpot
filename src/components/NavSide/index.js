import React from 'react';
import { MdHome, MdList, MdForum, MdHelp } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import { Container } from './styled';
export default function NavSide() {
	return (
		<Container>
			<h1>TSP</h1>
			<ul>
				<li>
					<NavLink to='/' title='Início'>
						<MdHome />
					</NavLink>
				</li>
				<li>
					<NavLink to='/board' title='Início'>
						<MdList />
					</NavLink>
				</li>
				<li>
					<a href='*' title='Perguntas e respostas'>
						<MdForum />
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href='*' title='Sobre'>
						<MdHelp />
					</a>
				</li>
			</ul>
		</Container>
	);
}
