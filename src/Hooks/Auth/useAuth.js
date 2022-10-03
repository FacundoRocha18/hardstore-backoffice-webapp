import { useState } from 'react';

/* Custom hooks --------------------- */
import { useToken } from './useToken';

/* API Services --------------------- */
import { LoginService } from '../../Services';

export const useAuth = () => {

  const [loading, setIsLoading] = useState(true)

  const { token, setToken } = useToken()

  const handleLogin = async ({ id, pin }) => {

    try {
      const {
        status,
        message,
        token
      } = await LoginService(id, pin);

      if (status === false) {
        return console.log(message)
      }

      setTimeout(() => {
        return {
          token: setToken(token),
        };
      }, 2000);

      return loading;
     
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload(false);
  };

  return {
    token,
    loading,
    setIsLoading,
    onLogin: handleLogin,
    onLogOut: handleLogout
  }
}


