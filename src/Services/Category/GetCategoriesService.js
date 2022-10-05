export const GetCategoriesService = async () => {

    const url = `https://api.hardstore.store/api/categories/`;

    const devUrl = `http://localhost:8000/api/categories/`;

    const response = await fetch(url);
    const { data } = await response.json();

    
    data.sort((a, b) => {
        return a.cat_id - b.cat_id
    })
        
    const categories = data.map(cats => {



        return {
            cat_id: cats.cat_id,
            cat_name: cats.cat_name
        }

    })
    return categories;
}