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

  const [showMenu, setShowMenu] = useState(true);

  const [token, setToken] = useState(false);

  /* if (!token) {
    return <Login />
  } */

  return (
    <div className="App">
      <Router>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      </Router>
    </div>
  );
}

export default App;
