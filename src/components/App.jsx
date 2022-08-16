import React, { useState } from 'react';

/* ReactRouter ----------------------- */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'

/* Components ----------------------- */
import { Home, Header, LoginScreen } from '../components'

/* Custom hooks --------------------- */
import { useAuth } from '../hooks'

/* CSS Styles ----------------------- */
import './App.css';

export const App = () => {

  const [showMenu, setShowMenu] = useState(true);

  const { token, loading, setIsLoading, onLogin, onLogOut } = useAuth()

  if (!token) {
    return <LoginScreen onLogin={onLogin} />
  }

  return (
    <div className="App">
      <Router>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} onLogOut={onLogOut} />
        <Routes>
          <Route
            path='/'
            element={
              <Home showMenu={showMenu} isLoading={loading} setIsLoading={setIsLoading} />
            } />
        </Routes>
      </Router>
    </div>
  );
}

