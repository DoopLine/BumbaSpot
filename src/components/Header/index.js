import React from 'react';
import { Container, MainWrapper } from './styled';

export default function Header() {
    const text = 'Menú de Listas';

	return (
		<Container>
			<MainWrapper>
				<p className="truncate" title={text}>{text}</p>
			</MainWrapper>
			<div>
				<span>
					<img
						src='./static/images/69152278_2453630424734358_4212083270524862464_o.jpg'
						alt='user'
					/>
					<p>Denilson Costa</p>
				</span>
			</div>
		</Container>
	);
}
