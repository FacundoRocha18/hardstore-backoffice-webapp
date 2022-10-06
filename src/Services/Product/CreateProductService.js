
export const CreateProductService = async (data) => {

	const url = `https://api.hardstore.store/api/products/new`

	const devUrl = 'http://localhost:8000/api/products/new'

	const requestHeaders = new Headers();
	requestHeaders.append("Content-Type", "application/json;charset=utf-8");

	const urlencoded = new URLSearchParams();
	urlencoded.append('requestData', JSON.stringify(data));

	const requestOptions = {
		method: 'POST',
		mode: 'cors',
		headers: requestHeaders,
		body: JSON.stringify(data)
	};

	const response = await fetch(devUrl, requestOptions)

	const { ok, title, message } = await response.json()
	
	return {
		ok,
		title,
		message
	}
}