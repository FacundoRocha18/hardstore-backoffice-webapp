import React, { useState } from 'react'

import PropTypes from 'prop-types'

/* CSS Styles --------------------- */
import style from './Home.module.css'
import css from 'classnames'

/* Components ----------------------- */
import { MenuScreen, AddProducts } from '../'

export const Home = ({ isLoading, setIsLoading }) => {

  /* if (data.length >= 1) setIsLoading(false);

  if (isLoading) {
    return (
      <LoadingScreen />
    )
  } */

  return (
    <>
      <div className={style.home_title}>
        <h1>Dashboard</h1>
      </div>
      <div>
        <MenuScreen />
      </div>
    </>
  )
}

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired
}

