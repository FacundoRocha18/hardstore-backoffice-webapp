import { useEffect, useState } from 'react';

export const useToken = () => {

    const [sessionToken, setSessionToken] = useState(null);


    const getToken = () => {

        const savedToken = sessionStorage.getItem('token');

        return savedToken;
    }

    useEffect(() => {

        setSessionToken(getToken());

        return () => {

        }
    }, [getToken])

    const saveToken = (userToken) => {

        if (!userToken) return;

        sessionStorage.setItem('token', JSON.stringify(userToken));
        setSessionToken(userToken.token)
    }

    return {
        token: sessionToken,
        setToken: saveToken
    }
}
