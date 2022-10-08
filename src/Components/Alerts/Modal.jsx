import React, { useState } from 'react'

/* Components --------------------- */
import { Button, Loading } from '..'

/* CSS Styles --------------------- */
import style from './Modal.module.css'
import css from 'classnames'

export const Modal = ({ isActive, setIsActive, onLogout, newAlert }) => {

	const [showLoading, setLoading] = useState();

	const handleLogout = () => {

		newAlert('Se ha cerrado correctamente la sesion', 'Se lo redigira a la pagina de inicio de sesión en unos segundos', 'info')

		setLoading(true)

		setTimeout(() => {
			return onLogout()
		}, 2500)
	}

	if (showLoading) {
		return (
			<div className={css(style.container, isActive ? style.active : style.inactive)} >
				<Loading />
			</div >
		)
	}

	return (
		<div className={css(style.container, isActive ? style.active : style.inactive)}  >
			<div className={css(style.modal)}>
				<div className={style.body}>
					<h4>¿Estás seguro que quieres cerrar la sesión?</h4>
					<div className={style.buttonContainer}>
						<Button variant='accept' show={true} func={handleLogout} >
							<p>
								Si, cerrar sesión
							</p>
						</Button>
						<Button variant='decline' show={true} func={() => setIsActive(false)} >
							<p>
								Cancelar
							</p>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
