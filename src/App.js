import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { SessionContext } from './context/sessionContext';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Boards from './components/Boards';
import Board from './components/Board';
import NavSide from './components/NavSide';
import ErrorPage from './components/404';
import CardInfoSide from './components/CardInfoSide';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

// Styled
import GlobalStyled from './styles/globalStyled';

function App() {
	const { session } = useContext(SessionContext);

	return (
		<DndProvider backend={HTML5Backend}>
			<NavSide />
			<div className='wrapper'>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />

					<Route path='/login' component={LogIn}/>

					<Route path='/signup' component={SignUp}/>

					{session.sessionId && (
						<>
							<Route exact path='/boards' component={Boards}/>

							<Route path='/boards/:boardId'>
								<Board />
							</Route>

							<Route exact path='/lists/:listId/cards/:cardId'>
								<CardInfoSide />
							</Route>
						</>
					)}

					<Route >
						<ErrorPage />
					</Route>
				</Switch>
			</div>
			<GlobalStyled />
		</DndProvider>
	);
}

export default App;
