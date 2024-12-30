import React from 'react';
import Board from './components/Board';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Board />
    </>
  );
};

export default App;
