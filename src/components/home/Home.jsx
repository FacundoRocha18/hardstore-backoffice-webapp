import React, { useState } from 'react'

import PropTypes from 'prop-types'

/* CSS Styles --------------------- */
import style from './Home.module.css'
import css from 'classnames'

/* Components ----------------------- */
import { LoadingScreen, HomeCard, HomeMenu } from '../'

export const Home = ({ showMenu, isLoading, setIsLoading }) => {

  const [data, setData] = useState([
    {
      date: 'Hoy',
      title: 'Usuarios',
      icon: 'people',
      text: 'Nuevos usuarios',
      value: 58
    },
    {
      date: 'Ayer',
      title: 'Usuarios',
      icon: 'people',
      text: 'Usuarios perdidos',
      value: 12
    },
    {
      date: 'Hoy',
      title: 'Inventario',
      icon: 'inventory',
      text: 'Nuevas ventas',
      value: 584
    }
  ]);

  /* if (data.length >= 1) setIsLoading(false);

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  } */

  return (
    <>
      {
        <div className={css(style.home_container, !showMenu && style.grow)}>
          <div className={style.home_title}>
            <h1>Dashboard</h1>
          </div>
          <div className={style.grid_container}>
            {
              data.map(({ date, title, icon, text, value }, index) => (
                <HomeCard
                  key={index}
                  date={date}
                  title={title}
                  icon={icon}
                  text={text}
                  value={value}
                />
              ))
            }
          </div>
          <div className={style.menu_container}>
            <HomeMenu />
          </div>
        </div>
      }
    </>
  )
}

Home.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired
}

