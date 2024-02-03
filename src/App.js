import React from 'react';

//Router
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
//Components
import Header from './components/Header';
import Home from './components/Home';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Home />
      <GlobalStyle />
    </div>

  )
}

export default App;
