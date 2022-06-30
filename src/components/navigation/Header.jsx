import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* CSS Styles --------------------- */
import style from './Header.module.css'
import css from 'classnames'

/* Components ----------------------- */
import Menu from './Menu'


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const [toggle, setToggle] = useState();

    const [icon, setIcon] = useState('menu');

    const handleToggleClicked = (e) => {
        e.preventDefault();

        setToggle(!toggle);
        (!toggle) ? setIcon('close') : setIcon('menu');
    }

    return (
        <>
            {
                (showMenu) ? <Menu /> : null
            }
            {
                <header className={style.header_container}>
                    <section className={style.header_content}>
                        <div className={style.header_title_container}>
                            <div className={style.website_logo}>
                                <h3>Hard<span>Store</span> Dashboard</h3>
                            </div>
                        </div>
                        <div className={style.toggle_button_container}>
                            <button onClick={(e) => handleToggleClicked(e)}>
                                <span className="material-icons-round">
                                    {icon}
                                </span>
                            </button>
                        </div>
                    </section>
                </header>
            }
        </>
    )
}

export default Header;
