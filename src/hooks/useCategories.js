import { useEffect, useState } from 'react'

import { getCategories } from '../API'


export const useCategories = () => {

    const [cats, setCats] = useState([])

    useEffect(() => {
        getCats();

    }, [])


    const getCats = async () => {

        const request = await getCategories();

        setCats(request);
    }

    return {
        cats
    }
}