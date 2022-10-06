import React, { useState } from 'react'

import PropTypes from 'prop-types'

/* CSS Styles --------------------- */
import style from './SelectBox.module.css'
import css from 'classnames'

/* Components --------------------- */
import { Button } from '..'

export const SelectBox = ({ cats, selectedCat, setSelectedCat, required }) => {

    const [deployCats, setDeployCats] = useState(false);

    const [highlight, setHighlight] = useState(false);

    const handleSelect = (e, cat_id, cat_name) => {
        e.preventDefault();

        setSelectedCat({
            cat_id: parseInt(cat_id),
            cat_name: cat_name.trim()
        })
        setHighlight(e.target.name)
        setDeployCats(false);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setDeployCats(!deployCats);
    }

    return (
        <>
            <div className={style.container}>
                <div className={css(style.column, deployCats && style.grow)}>
                    <input className={css(style.selected_cat, deployCats && style.deploy_cats)} type="text" name="selected_cat" id="selected_cat" placeholder='Seleccione una categoría' defaultValue={selectedCat.cat_name} required={required} />
                    <div className={css(style.cats_container, !deployCats && style.hidden)}>
                        <ul>
                            {
                                cats.map(({ cat_id, cat_name }, index) => (
                                    <li key={index}>
                                        <button name={cat_name} className={css(style.cat_btn, highlight === cat_name && style.highlight)} onClick={(e) => handleSelect(e, cat_id, cat_name)} >
                                        {cat_id} - {cat_name}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={style.button_container}>
                    <button className={style.deploy_btn} onClick={(e) => handleClick(e)}>
                        <span className={css("material-icons-round", deployCats && style.rotate)}>
                            expand_more
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

SelectBox.defaultProps = {
    cats: {
        cat_name: 'Category',
        cat_id: 0
    }
}

SelectBox.propTypes = {
    cats: PropTypes.array.isRequired,
    selectedCat: PropTypes.object,
    setSelectedCat: PropTypes.func.isRequired,
}
