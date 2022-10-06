import React from 'react'

/* CSS Styles --------------------- */
import style from './alert.module.css'
import css from 'classnames'

/* Components --------------------- */
import { Button } from '../inputs/Button'

export const Alert = ({ type, title, message, isActive, close }) => {

	const icon = selectIcon(type);

	return (
		<>
			<section className={css(style.container, isActive ? style.active : style.inactive)}>
				<div className={css(style.head, style[type])}>
					<span className="material-icons-outlined">
						{
							icon
						}
					</span>
				</div>
				<div className={css(style.body, isActive ? style.active : style.inactive)}>
					<div className={css(style.message)}>
						<h4>
							{title}
						</h4>
						<p>{message}</p>
					</div>
					<div className={css(style.btn_container)}>
						<Button variant={'close-btn'} func={close} >
							<span className="material-icons-outlined">
								close
							</span>
						</Button>
					</div>
				</div>
			</section>
		</>
	)
}

const selectIcon = (alertType) => {

	const icons = [
		{
			type: 'info',
			icon: 'info'
		},
		{
			type: 'error',
			icon: 'error_outline'
		},
		{
			type: 'warning',
			icon: 'warning_amber'
		},
		{
			type: 'success',
			icon: 'check_circle_outline'
		}
	]

	let alertIcon;

	for (let i = 0; i < icons.length; i++) {

		const { type, icon } = icons[i]

		if (type === alertType) {
			alertIcon = icon
		}
	}

	return alertIcon;
}
