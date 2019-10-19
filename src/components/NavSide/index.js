import React from 'react';
import { MdHome, MdDeveloperBoard, MdInfo, MdFeedback } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import { Container } from './styled';
export default function NavSide() {
	return (
		<Container>
			<h1>TSP</h1>
			<ul>
				<li>
					<NavLink exact to='/' title='Início'>
						<MdHome />
					</NavLink>
				</li>
				<li>
					<NavLink to='/boards' activeClassName="active" title='Boards'>
						<MdDeveloperBoard />
					</NavLink>
				</li>
				<li>
					<NavLink to='/faq' title='Perguntas e respostas'>
						<MdFeedback />
					</NavLink>
				</li>
			</ul>
			<ul>
				<li>
					<a href='*' title='Sobre'>
						<MdInfo />
					</a>
				</li>
			</ul>
		</Container>
	);
}
