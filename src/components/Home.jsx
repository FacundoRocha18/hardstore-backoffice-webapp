import React from 'react'

/* CSS Styles --------------------- */
import style from './Home.module.css'
import css from 'classnames'

/* Components ----------------------- */
import { Header, LoadingScreen } from '../components'

export const Home = ({showMenu, loading}) => {
  
  if ( loading ) {
    return (
      <LoadingScreen />
    )
  }

  if ( !loading ) {
    return (
      <>
          <div className={css(style.home_container, !showMenu && style.grow)}>
          </div>
      </>
    )
  }

}

