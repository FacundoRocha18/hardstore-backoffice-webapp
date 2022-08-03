import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* CSS Styles --------------------- */
import style from './Header.module.css'
import css from 'classnames'

/* Components ----------------------- */
import { Menu } from '../../components'


export const Header = ({ showMenu, setShowMenu, onLogOut }) => {

    const [toggle, setToggle] = useState();

    const [icon, setIcon] = useState('close');

    const handleToggleClicked = (e) => {
        e.preventDefault();

        setShowMenu(!showMenu);
        setToggle(!toggle);
        (!toggle) ? setIcon('menu') : setIcon('close');
    }

    return (
        <>

            {
                <header className={css(!showMenu && style.hidden)}>
                    <div className={css(style.header_container, !showMenu && style.hide)}>
                        <section className={style.header_content}>
                            <div className={style.header_title_container}>
                                <h1 className='website_logo'><span>Hard</span>Store</h1>
                            </div>
                        </section>
                        <section className={css(style.header_menu, !showMenu && style.hidden)}>
                            <Menu show={showMenu} />
                        </section>
                    </div>
                    <div className={css(style.buttons_container, !showMenu && style.move)}>
                        <button className={css('icon_btn', style.toggle_button)} onClick={(e) => handleToggleClicked(e)} title='Menu'>
                            <span className="material-icons-round">
                                {icon}
                            </span>
                        </button>
                        <section className={css(style.logout_button_container, !showMenu && style.hidden)}>
                            <button className={css('icon_btn', style.logout_button)} title='Cerrar sesión' onClick={onLogOut}>
                                <span className="material-icons-round">
                                    logout
                                </span>
                            </button>
                        </section>
                    </div>
                </header>


            }
        </>
    )
}

