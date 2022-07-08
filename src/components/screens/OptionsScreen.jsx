import React from 'react'

/* CSS Styles --------------------- */
import style from './OptionsScreen.module.css'
import css from 'classnames'

const OptionsScreen = ({ title = 'Usuarios' }) => {
    return (
        <>
            <section className='main_container'>
                <div className={style.options_container}>
                    <div className={style.options_header}>
                        <h2>{title}</h2>
                    </div>
                    <div className={style.options_body}>
                        <div className={style.buttons_container}>
                            <button><p>Añadir usuario</p></button>
                            <button><p>Eliminar usuario</p></button>
                            <button><p>Modificar usuario</p></button>
                            <button><p>Listar usuarios</p></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OptionsScreen;
