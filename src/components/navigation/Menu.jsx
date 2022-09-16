import React from 'react'
import { Link } from 'react-router-dom'

/* CSS Styles --------------------- */
import style from './Menu.module.css'
import css from 'classnames'

export const Menu = ({ }) => {
  return (
      <div className={css(style.menu_container)}>
        <div className={style.menu_header}>
          <h3>Menú</h3>
        </div>
        <nav className={style.menu}>
          <ul>
            <li>
              <span className="material-icons-round">
                home
              </span>
              <Link to={'/'}>Inicio</Link>
            </li>
            {/* <li>
              <span className="material-icons-round">
                people_alt
              </span>
              <Link to={'/'}>Empleados</Link>
            </li> */}
            <li>
              <span className="material-icons-round">
                inventory
              </span>
              <Link to={'/'}>Inventario</Link>
            </li>
            {/* <li>
              <span className="material-icons-round">
                sell
              </span>
              <Link to={'/'}>Ventas</Link>
            </li> */}

          </ul>
        </nav>
      </div>
  )
}

