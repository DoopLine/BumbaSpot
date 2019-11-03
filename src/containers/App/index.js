import React, { useContext } from 'react';
import useToggle from '../../hooks/useToggle';
import { Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { SessionContext } from '../../context/sessionContext';

// Containers
import Home from '../Home';
import Boards from '../Boards';
import Board from '../Board';
import ErrorPage from '../404';
import CardInfoSide from '../CardInfoSide';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
// Components
import Header from '../../components/Header';
import NavSide from '../../components/NavSide';

// Styled
import GlobalStyled from '../../styles/globalStyled';

function App() {
	const { session } = useContext(SessionContext);
	const [showSideNav, toggleShowSideNav] = useToggle(true);

	return (
		<DndProvider backend={HTML5Backend}>
			{showSideNav && <NavSide />}
			<div className='wrapper'>
				<Header toggleShowSideNav={toggleShowSideNav}/>
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

export default React.memo(App);
