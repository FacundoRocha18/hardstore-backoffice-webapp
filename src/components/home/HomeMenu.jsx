import React from 'react'

/* React Router ----------------------- */
import { Link } from 'react-router-dom'

/* CSS Styles --------------------- */
import style from './HomeMenu.module.css'
import css from 'classnames'

/* Components --------------------- */
import { Button } from '../'

export const HomeMenu = () => {

    const menu = [
        {

        }
    ]

    return (
        <>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Opciones</h3>
                </div>
                <div className={style.grid_container}>
                    <Button variant='btn' >
                        <Link to={'/test'}><p>Inicio</p></Link>
                    </Button>
                    <Button variant='btn'>
                        <Link to={'/test'}><p>Inicio</p></Link>
                    </Button>
                    <Button variant='btn' >
                        <Link to={'/test'}><p>Inicio</p></Link>
                    </Button>
                    <Button variant='btn'>
                        <Link to={'/test'}><p>Inicio</p></Link>
                    </Button>
                </div>
            </div>
        </>
    )
}
