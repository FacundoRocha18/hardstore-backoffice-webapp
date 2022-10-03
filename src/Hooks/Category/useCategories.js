import { useEffect, useState } from 'react'

/* API Services --------------------- */
import { GetCategoriesService } from '../../Services'


export const useCategories = () => {

    const [cats, setCats] = useState([])

    useEffect(() => {
        getCats();

    }, [])


    const getCats = async () => {

        const request = await GetCategoriesService();

        setCats(request);
    }

    return {
        cats
    }
}