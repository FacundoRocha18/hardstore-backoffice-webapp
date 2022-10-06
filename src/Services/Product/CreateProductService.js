
export const CreateProductService = (data) => {

    const url = `https://api.hardstore.store/api/products/new`

		const devUrl = 'http://localhost:8000/api/products/new'

    const requestHeaders = new Headers();
    requestHeaders.append("Content-Type", "application/json;charset=utf-8");

    const urlencoded = new URLSearchParams();
    urlencoded.append('requestData', JSON.stringify(data));

    const requestOptions = {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(data)
    };

    fetch(devUrl, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))

}