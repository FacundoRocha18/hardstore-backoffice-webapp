import React from 'react'

/* CSS Styles --------------------- */
import style from './Home.module.css'
import css from 'classnames'

/* Components ----------------------- */
import OptionsScreen from './screens/OptionsScreen'

const Home = ({showMenu}) => {
  return (
    <>
        <div className={css(style.home_container, !showMenu && style.grow)}>
            <OptionsScreen showMenu={showMenu} />
        </div>
    </>
  )
}

export default Home;
