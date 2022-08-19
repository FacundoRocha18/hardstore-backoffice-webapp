import React from 'react'

/* React Router ----------------------- */
import { Link } from 'react-router-dom'

/* CSS Styles --------------------- */
import style from './NoMatchScreen.module.css'
import css from 'classnames'

/* Components --------------------- */
import { Button } from '../'

export const NoMatch = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>
                Ups, no se encontró la página.
            </h1>
            <Button>
                <Link to={'/'}><p>Ir a la página de inicio</p></Link>
            </Button>
        </div>
    )
}
