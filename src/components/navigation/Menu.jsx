import React from 'react'
import { Link } from 'react-router-dom'

/* CSS Styles --------------------- */
import style from './Menu.module.css'
import css from 'classnames'

const Menu = ({show}) => {
  return (
    <div className={css(style.menu_container, show && style.hidden)}>Menu</div>
  )
}

export default Menu;
