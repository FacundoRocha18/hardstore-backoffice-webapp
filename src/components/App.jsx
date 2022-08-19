import React, { useState } from 'react';

/* CSS Styles --------------------- */
import style from './App.css'
import css from 'classnames'

/* ReactRouter ----------------------- */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'

/* Components ----------------------- */
import { Home, Header, Login, AddProducts, NoMatch } from '../components'

/* Custom hooks --------------------- */
import { useAuth } from '../hooks'

/* CSS Styles ----------------------- */
import './App.css';

export const App = () => {

  const [showMenu, setShowMenu] = useState(true);

  const { token, loading, setIsLoading, onLogin, onLogOut } = useAuth()

  if (!token) {
    return <Login onLogin={onLogin} />
  }

  return (
    <div className="App">
      <Router>
        <Header
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          onLogOut={onLogOut}
        />
        <div className={css('app_container', !showMenu && 'grow')}>
          <Routes>
            <Route
              exact path='/'
              element={
                <Home
                  isLoading={loading}
                  setIsLoading={setIsLoading}
                />
              } />

            <Route
              exact path='/api/products/new'
              element={
                <AddProducts />
              } />

            <Route
              path='*'
              element={
                <NoMatch />
              } />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

