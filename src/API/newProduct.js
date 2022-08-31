const newProduct = async (data) => {

    const url = `https://api.hardstore.store/api/auth/employees/login`

    const devURL = `http://127.0.0.1:8000/api/product/new`

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(devURL, params)
    
    const { ok, message } = await response.json()
        
    return {
        status: ok,
        message
    }

}