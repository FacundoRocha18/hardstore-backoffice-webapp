import React, { useState } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'

/* Components ----------------------- */
import Header from './components/navigation/Header'
import Login from './components/login/Login'
import Home from './components/Home'


/* CSS Styles ----------------------- */
import './App.css';

function App() {

  const [showMenu, setShowMenu] = useState(true);

  const [token, setToken] = useState(true);

  if (!token) {
    return <Login />
  }

  return (
    <div className="App">
      <Router>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Routes>
          <Route
            path='/'
            element={
              <Home showMenu={showMenu} />
            } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
