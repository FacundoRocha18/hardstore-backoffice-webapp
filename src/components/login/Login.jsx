import React from 'react'

/* CSS Styles --------------------- */
import style from './Login.module.css'
import css from 'classnames'

const LoginScreen = () => {
  return (
    <>
      <section className={style.login_container}>
        <div className={style.login_header}>
          <h2>Inicie sesión</h2>
        </div>
        <div className={style.login_body}>
          <form>
            <div className={style.inputs_container}>
              <div className={style.input_row}>
                <label htmlFor='email'>Tu email:</label>
                <input name='email' id='email' type='email' placeholder='email@email.com'></input>
              </div>
              
              <div className={style.input_row}>
                <label htmlFor='pin'>Tu PIN:</label>
                <input name='pin' id='pin' type='password' autoComplete='none' placeholder='Contraseña'></input>
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

export default LoginScreen;
