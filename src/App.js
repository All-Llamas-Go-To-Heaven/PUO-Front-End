import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav'
import logo from './Images/PutUsOnLogoJPG.jpg'

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Put Us On</h1>
      <img src={logo} alt="this is the logo" />
      <Header />
    </div>
  );
}

export default App;
