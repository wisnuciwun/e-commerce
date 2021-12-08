import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import DefaultHeader from './container/DefaultHeader';

function App() {
  return (
    <div className="App">
     <DefaultHeader/>
     <Home/>
    </div>
  );
}

export default App;
