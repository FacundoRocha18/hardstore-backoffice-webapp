import React from 'react'

/* PropTypes --------------------- */
import PropTypes from 'prop-types'

/* CSS Styles --------------------- */
import style from './Button.module.css'
import css from 'classnames'

export const Button = ({ variant, children, show, func, testId }) => {

	const handleAction = (e) => {
		e.preventDefault()
		func()
	}

	if(!func){
		return (
			<button className={css(style.button, style[variant], !show && style.hidden)} data-testid={testId} >
				{children}
			</button>
		)
	}
	return (
		<button className={css(style.button, style[variant], !show && style.hidden)} onClick={(e) => handleAction(e)}>
			{children}
		</button>
	)
}

Button.defaultProps = {
	variant: 'btn'
}

Button.propTypes = {
	variant: PropTypes.string.isRequired,
	children: PropTypes.object,
	func: PropTypes.func
}
