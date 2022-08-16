import React from 'react'

import PropTypes from 'prop-types'

/* CSS Styles --------------------- */
import style from './HomeCard.module.css'
import css from 'classnames'

export const HomeCard = ({ date, title, text, value }) => {
    return (
        <>
            <div className={style.grid_card}>
                <div className={style.card_title}>
                    <h4>{title}</h4>
                    <span className="material-icons-round">
                        people
                    </span>
                </div>
                <div className={style.card_body}>
                    <p>{date}</p>
                    <h6>{text}</h6>
                    <h5 className={style.number}>{value}</h5>
                </div>
            </div>
        </>
    )
}

HomeCard.defaultProps = {
    date: 'Empty',
    title: 'Empty',
    text: 'Empty',
    value: 0
}

HomeCard.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}
