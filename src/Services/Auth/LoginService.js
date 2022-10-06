
export const LoginService = async (id, password) => {

    const user = {
        id: id,
        pin: password
    };

    const url = `https://api.hardstore.store/api/auth/employees/login`

    const devUrl = `http://localhost:8000/api/auth/employees/login`

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    };

    const response = await fetch(url, params)
    
    const { ok, message, data } = await response.json()
    
    const { token, username } = data;
    
    return {
        status: ok,
        message,
        token,
        username
    }
}