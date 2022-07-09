import React from 'react'

/* CSS Styles --------------------- */
import style from './OptionsScreen.module.css'
import css from 'classnames'

const OptionsScreen = ({ showMenu, title = 'Usuarios' }) => {
    return (
        <>
            <section className='main_container'>
                <div className={css(style.options_container, !showMenu && style.grow)}>
                    <div className={style.options_header}>
                        <h2>{title}</h2>
                    </div>
                    <div className={style.options_body}>
                        <div className={style.buttons_container}>
                            <button className={css('btn', style.options_button)}><p>Añadir {title}</p></button>
                            <button className={css('btn', style.options_button)}><p>Eliminar {title}</p></button>
                            <button className={css('btn', style.options_button)}><p>Modificar {title}</p></button>
                            <button className={css('btn', style.options_button)}><p>Listar {title}</p></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OptionsScreen;
