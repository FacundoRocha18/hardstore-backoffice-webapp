export const getCategories = async () => {

    const url = `https://api.hardstore.store/`;

    const devUrl = `http://localhost:8000/api/categories/`;

    const response = await fetch( devUrl );
    const { data } = await response.json();
        
    const categories = data.map( cats => {

        return {
            cat_id: cats.cat_id,
            cat_name: cats.cat_name
        }
        
    })
    return categories;
}