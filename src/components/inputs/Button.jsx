import React from 'react'

/* PropTypes --------------------- */
import PropTypes from 'prop-types'

/* CSS Styles --------------------- */
import style from './inputs.module.css'
import css from 'classnames'

export const Button = ({ variant, children, action }) => {

    return (
        <>
            <button className={css(style.button, style[variant])} onClick={action}>
                {children}
            </button>
        </>
    )
}

Button.defaultProps = {
    variant: 'btn'
}

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.object,
    action: PropTypes.func
}
