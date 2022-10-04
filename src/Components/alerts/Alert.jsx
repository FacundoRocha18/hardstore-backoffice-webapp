import React from 'react'

/* CSS Styles --------------------- */
import style from './alert.module.css'
import css from 'classnames'

export const Alert = ({ type, title, message, isActive }) => {

	const icon = selectIcon(type);

	return (
		<>
			<section className={css(style.container, isActive ? style.active : style.inactive)}>
				<div className={css(style.icon, style[type])}>
					<span className="material-icons-outlined">
						{
							icon
						}
					</span>
				</div>
				<div className={css(style.message, isActive ? style.active : style.inactive)}>
					<h3>
						{title}
					</h3>
					<p>{message}</p>
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
