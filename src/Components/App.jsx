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
import { Home, Header, Login, CreateNewProduct, NoMatch, Modal } from './'
import { Alert } from './Alerts/Alert'

/* Custom hooks --------------------- */
import { useAuth, useAlert } from '../Hooks'

/* CSS Styles ----------------------- */
import './App.css';

export const App = () => {

	const [showMenu, setShowMenu] = useState(true);

	const [showLogoutModal, setShowLogoutModal] = useState(false)

	const { token, loading, setIsLoading, onLogin, onLogOut } = useAuth()

	const { isActive, title, message, type, openAlert: newAlert, closeAlert } = useAlert()

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
					onLogOut={setShowLogoutModal}
				/>

				<Alert type={type} title={title} message={message} isActive={isActive} close={closeAlert} />
				<Modal isActive={showLogoutModal} setIsActive={setShowLogoutModal} onLogout={onLogOut} newAlert={newAlert} />
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

