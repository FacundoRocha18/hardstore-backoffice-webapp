import React from 'react'
import { Link } from 'react-router-dom'


/* CSS Styles --------------------- */
import style from './OptionsScreen.module.css'
import css from 'classnames'

export const OptionsScreen = ({ showMenu, title = 'Usuarios' }) => {
    return (
        <>
            <section className='main_container'>
                <div className={css(style.options_container, !showMenu && style.grow)}>
                    <div className={style.options_header}>
                        <h2>{title}</h2>
                    </div>
                    <div className={style.options_body}>
                        <div className={style.buttons_container}>
                            <Link to={'/api/users/create'} className={css('btn', style.options_button)}><p>Añadir {title}</p></Link>
                            <Link to={'/api/users/delete'} className={css('btn', style.options_button)}><p>Eliminar {title}</p></Link>
                            <Link to={'/api/users/update'} className={css('btn', style.options_button)}><p>Modificar {title}</p></Link>
                            <Link to={'/api/users/list'} className={css('btn', style.options_button)}><p>Listar {title}</p></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

