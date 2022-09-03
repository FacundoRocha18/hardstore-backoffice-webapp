import React from 'react'

import PropTypes from 'prop-types'

/* CSS Styles --------------------- */
import style from './SelectBox.module.css'
import css from 'classnames'

/* Components --------------------- */
import { Button } from '../'

export const SelectBox = ({ cats, setSelectedCat }) => {

    const handleSelect = ({target}) => {
        setSelectedCat(target.value)
    }

    return (
        <>
            <div className={style.container}>
                <ul>
                    {
                        cats.map(({ cat_name }, index) => (
                            <li key={index}>
                                <Button variant='select-btn' func={handleSelect} >
                                    <p>
                                        {cat_name}
                                    </p>
                                </Button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

SelectBox.propTypes = {
    cats: PropTypes.array.isRequired,
    setSelectedCat: PropTypes.func.isRequired,
}
