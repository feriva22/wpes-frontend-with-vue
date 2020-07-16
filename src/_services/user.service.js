import axios from 'axios';

export const userService = {
    login,
	logout,
	register,
	getDetail,
    getAll
};

function login(email, password) {
	return axios.post(`${process.env.SERVER_URI}/login.php`,JSON.stringify({email,password}))
					.then(handleResponse)
					.then(data => {
						if(data.access_token){
							localStorage.setItem('user', JSON.stringify(data));
						}
						return data;
					})
					.catch(handleError);
 
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(fullname, email, password){
	return axios.post(`${process.env.SERVER_URI}/register.php`,JSON.stringify({ fullname, email, password }))
				.then(handleResponse)
				.then(data => { return data})
				.catch(handleError);
}


function getDetail(idUser) {
	return axios.get(`${process.env.SERVER_URI}/user.php?iduser=${idUser}`)
				.then(handleResponse)
				.then(data => { return data})
				.catch(handleError);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${process.env.SERVER_URI}/user.php`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
	return response.data;
}

function handleError(error){
	if(typeof(error.response) == 'undefined' ){
		return Promise.reject('Gagal Terhubung ke server');
	}
	const error_res = error.response;
	return Promise.reject((error_res.data && error_res.data.message) || error_res.statusText);
}