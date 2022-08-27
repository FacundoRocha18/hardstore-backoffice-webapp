import React from 'react'

import PropTypes from 'prop-types'

/* CSS Styles --------------------- */
import style from './FormGroup.module.css'
import css from 'classnames'

export const FormGroup = ({ name, text, type, placeholder, children, disabled, flex, value }) => {

    if (children) {
        return (
            <>
                <div className={style.form_group}>
                    {
                        children
                    }
                </div>
            </>
        )
    }

    if (!children) {
        return (
            <>
                <div className={css(style.form_group, flex && style.flex)}>
                    <label htmlFor={name}>{ text }</label>
                    <input type={type} name={name} id={name} value={value} placeholder={placeholder} disabled={disabled} />
                </div>
            </>
        )
    }

}

FormGroup.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.array,
    disabled: PropTypes.bool,
}
