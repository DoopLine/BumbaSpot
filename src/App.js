import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Board from './components/Board';
import NavSide from './components/NavSide';
import ErrorPage from './components/404';
// import CardInfoSide from './components/CardInfoSide';
// Styled
import GlobalStyled from './styles/globalStyled';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <NavSide/>
      <div className="wrapper">
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/board'>
            <Board/>
          </Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
      
      <GlobalStyled/>
    </DndProvider>
  );
}

export default App;
