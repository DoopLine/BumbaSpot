import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Board from './components/Board';
import NavSide from './components/NavSide';
// Styled
import GlobalStyled from './styles/globalStyled';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <NavSide/>
      <div className="wrapper">
        <Header/>
        {/* <Board/> */}
        <Home/>
      </div>
      
      <GlobalStyled/>
    </DndProvider>
  );
}

export default App;
