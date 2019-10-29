import React from 'react';
import { MdHome, MdDashboard, MdInfo, MdFeedback } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import { Container, Image } from './styled';
export default function NavSide() {
	return (
		<Container>
			<Image src={require("../../assets/logo.ico")} alt="BumbaSpot Logo"/>
			<ul>
				<li>
					<NavLink exact to='/' title='Início'>
						<MdHome />
					</NavLink>
				</li>
				<li>
					<NavLink to='/boards' activeClassName="active" title='Boards'>
						<MdDashboard />
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
