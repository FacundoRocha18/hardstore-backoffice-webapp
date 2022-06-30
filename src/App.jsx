import React, { useState } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  useNavigate
} from 'react-router-dom'

/* Components ----------------------- */
import Header from './components/navigation/Header'


/* CSS Styles ----------------------- */
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
