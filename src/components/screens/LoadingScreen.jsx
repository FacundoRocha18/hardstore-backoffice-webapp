import React from 'react'

/* CSS Styles --------------------- */
import style from './LoadingScreen.module.css'
import css from 'classnames'

export const LoadingScreen = () => {

  return (
    <>
      <div className={style.container}>
        <div className={style.spinner}>
        </div>
        <h4 className='mt-2'>Loading...</h4>
      </div>
    </>
  )
}
