
export const getAuth = async (id, password) => {

    const url = `https://api.hardstore.store/api/auth/login`

    const devURL = `http://localhost:8000/api/auth/employees/login`

    const data = {
        id: id,
        pin: password
    };

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    };

    const { ok, message, loginData } = await fetchData(devURL, params);

    const { token, username } = loginData;

    return {
        status: ok,
        message: message,
        token: token,
        username: username
    };

}

const fetchData = async (url, params) => {

    try {
        const response = await fetch(url, params)

        const { ok, message, data } = await response.json()

        return {
            status: ok,
            message: message,
            loginData: data
        }
    } catch (error) {
        console.log(error);
    }
}