import React from 'react'
import { Link } from 'react-router-dom'

/* CSS Styles --------------------- */
import style from './Menu.module.css'
import css from 'classnames'

const Menu = ({ }) => {
  return (
    <div className={css(style.menu_container)}>
      <div className={style.menu_header}>
        <h3>Menú</h3>
      </div>
      <nav className={style.menu}>
        <ul>
          <li>
            <Link to={'#'}>Empleados</Link>
            <span className="material-icons-round">
              people_alt
            </span>
          </li>
          <li>
            <Link to={'#'}>Inventario</Link>
            <span className="material-icons-round">
              inventory
            </span>
          </li>
          <li>
            <Link to={'#'}>Ventas</Link>
            <span className="material-icons-round">
              sell
            </span>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Menu;
