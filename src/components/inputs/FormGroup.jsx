import React from 'react'

import PropTypes from 'prop-types'

/* CSS Styles --------------------- */
import style from './inputs.module.css'
import css from 'classnames'

export const FormGroup = ({ name, text, type, placeholder, children }) => {

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
                <div className={style.form_group}>
                    <label htmlFor={name}>{ text }</label>
                    <input type={type} name={name} id={name} placeholder={placeholder} />
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
    children: PropTypes.array
}
