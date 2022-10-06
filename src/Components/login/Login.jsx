import React, { useState } from 'react';

/* CSS Styles --------------------- */
import style from './Login.module.css'

/* Components --------------------- */
import { Loading } from '../index'

/* Custom hooks --------------------- */

export const Login = ({ onLogin, newAlert }) => {

	const [showLoading, setLoading] = useState();

	const [ uId, setUId ] = useState('');
	const [ uPin, setUPin ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { loading, status, message } = await onLogin(uId, uPin)

		if (!status) {
			return newAlert(message, message, 'error');
		}

		newAlert(message, message, 'success');
		return setLoading(loading)
	}

	if (showLoading) {
		return (
			<Loading />
		)
	}

	if (!showLoading) {
		return (
			<>
				<section className={style.login_container}>
					<div className={style.login_header}>
						<h2>Inicie sesión</h2>
					</div>
					<div className={style.login_body}>

						<form onSubmit={(e) => handleSubmit(e)}>
							<div className={style.inputs_container}>
								<div className={style.input_row}>
									<label htmlFor='id'>Tu ID:</label>
									<input name='id' id='id' type='text' placeholder='Tu identificador' required onChange={(e) => setUId(e.target.value)} ></input>
								</div>

								<div className={style.input_row}>
									<label htmlFor='pin'>Tu PIN:</label>
									<input name='pin' id='pin' type='password' autoComplete='none' placeholder='pin' required onChange={(e) => setUPin(e.target.value)}></input>
								</div>
							</div>
							<div className={style.buttons_container}>
								<button><p>Iniciar sesión</p></button>
							</div>
						</form>
					</div>
				</section>
			</>
		)
	}
}

