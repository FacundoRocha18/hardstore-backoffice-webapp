import React from 'react'

/* Components --------------------- */
import {Button} from '../'

/* CSS Styles --------------------- */
import style from './LogoutModal.module.css'
import css from 'classnames'

export const LogoutModal = ({ isActive, setIsActive, onLogout, newAlert }) => {

	const handleLogout = () => {
		newAlert('Se ha cerrado correctamente la sesion', 'Se lo redigira a la pagina de inicio de sesion en unos segundos', 'info')

		setTimeout(() => {
			return onLogout()
		}, 2500)
	}

	return (
		<div className={css(style.container, isActive ? style.active : style.inactive)} >
			<div className={css(style.modal, isActive ? style.active : style.inactive)}>
				<div className={style.title}>
					<h3>Estas a punto de cerrar la sesion</h3>
				</div>
				<div className={style.body}>
					<p>Estas seguro que quieres salir?</p>
					<div className={style.buttonContainer}>
						<Button variant='accept' show={true} func={handleLogout} >
							<p>
								Si, cerrar sesion
							</p>
						</Button>
						<Button variant='decline' show={true} func={() => setIsActive(false)} >
							<p>
								No, mantener sesion
							</p>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
