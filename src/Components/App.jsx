import React, { useState } from 'react';

/* CSS Styles --------------------- */
import css from 'classnames'

/* ReactRouter ----------------------- */
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom'

/* Components ----------------------- */
import { Home, Header, Login, CreateNewProduct, NoMatch } from './'
import { Alert } from '../Components/alerts/Alert'

/* Custom hooks --------------------- */
import { useAuth, useAlert } from '../Hooks'

/* CSS Styles ----------------------- */
import './App.css';

export const App = () => {

	const [showMenu, setShowMenu] = useState(true);

	const { token, loading, setIsLoading, onLogin, onLogOut } = useAuth()

	const { isActive, title, message, type, newAlert, closeAlert } = useAlert()

	if (!token) {
		return (
			<>
				<Alert type={type} title={title} message={message} isActive={isActive} close={closeAlert} />
				<Login onLogin={onLogin} newAlert={newAlert} />
			</>
		)
	}

	return (
		<div className="App">
			<Router>
				<Header
					showMenu={showMenu}
					setShowMenu={setShowMenu}
					onLogOut={onLogOut}
				/>

				<Alert type={type} title={title} message={message} isActive={isActive} close={closeAlert} />

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
								<CreateNewProduct newAlert={newAlert} />
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

