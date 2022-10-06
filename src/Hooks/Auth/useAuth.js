/* React --------------------- */
import { useState } from 'react';

/* Custom hooks --------------------- */
import { useToken } from '../../Hooks';

/* API Services --------------------- */
import { LoginService } from '../../Services';

export const useAuth = () => {

	const [loading, setIsLoading] = useState(true)

	const { token, setToken } = useToken()

	const handleLogin = async (id, pin) => {

		try {
			const {
				status,
				message,
				token
			} = await LoginService(id, pin);

			if (!status) {
				return {
					loading,
					status,
					message
				}
			}

			setTimeout(() => {
				return {
					token: setToken(token),
				};
			}, 2000);

			return {
				loading,
				status,
				message
			};

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


