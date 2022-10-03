import React, { useState } from 'react';

/* CSS Styles --------------------- */
import style from './Login.module.css'
import css from 'classnames'

import { Loading } from '../../Components'

export const Login = ({ onLogin }) => {

  const [showLoading, setLoading] = useState();

  const [userData, setUserData] = useState({
    id: '',
    pin: ''
  })

  const handleUserInfoChanged = ({ target }) => {

    switch (target.name) {

      case 'id':
        setUserData({
          ...userData,
          id: target.value
        })
        break;

      case 'pin':

        setUserData({
          ...userData,
          pin: target.value
        })
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loading = await onLogin(userData)

    return setLoading(loading)
  }

  if (showLoading) {
    return (
      <Loading />
    )
  }

  if (!showLoading) {
    return (
      <>
        <section className={style.login_container}>
          <div className={style.login_header}>
            <h2>Inicie sesión</h2>
          </div>
          <div className={style.login_body}>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={style.inputs_container}>
                <div className={style.input_row}>
                  <label htmlFor='id'>Tu ID:</label>
                  <input name='id' id='id' type='text' placeholder='Tu identificador' required onChange={(e) => handleUserInfoChanged(e)} ></input>
                </div>

                <div className={style.input_row}>
                  <label htmlFor='pin'>Tu PIN:</label>
                  <input name='pin' id='pin' type='password' autoComplete='none' placeholder='pin' required onChange={(e) => handleUserInfoChanged(e)}></input>
                </div>
              </div>
              <div className={style.buttons_container}>
                <button><p>Iniciar sesión</p></button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}

