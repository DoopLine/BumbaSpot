import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { BoardProvider } from './context/boardContext';
import { ListProvider } from './context/listContext';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Boards from './components/Boards';
import Board from './components/Board';
import NavSide from './components/NavSide';
import ErrorPage from './components/404';
import CardInfoSide from './components/CardInfoSide';

// Styled
import GlobalStyled from './styles/globalStyled';

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<NavSide />
			<BoardProvider>
				<ListProvider>
					<div className='wrapper'>
						<Header />
						<Switch>
							<Route exact path='/'>
								<Home />
							</Route>

							<Route exact path='/boards'>
								<Boards />
							</Route>

							<Route path='/boards/:boardId'>
								<Board />
							</Route>

							<Route exact path='/lists/:listIndex/cards/:cardId'>
								<CardInfoSide />
							</Route>

							<Route>
								<ErrorPage />
							</Route>
						</Switch>
					</div>
				</ListProvider>
			</BoardProvider>
			<GlobalStyled />
		</DndProvider>
	);
}

export default App;
