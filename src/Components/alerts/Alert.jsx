import React from 'react'

/* CSS Styles --------------------- */
import style from './alert.module.css'
import css from 'classnames'

export const Alert = ({ type, message, isActive }) => {
	return (
		<>
			<section className={css(style.container)}>
				<div className={css(style.icon, style[type])}>
				<span className="material-icons-outlined">
					error_outline
				</span>
				</div>
				{message}
			</section>
		</>
	)
}
