import config from '../../config';
import { authHeader } from '../_helpers';
import axios from 'axios';

//add request interceptors
axios.interceptors.request.use(
	config => {
		const access_token = authHeader();
		if(access_token){
			config.headers['Authorization'] = access_token;
		}
		config.headers['Content-Type'] = 'application/json';
		return config;
	},
	error => {
		Promise.reject(error);
	}
)

//add response interceptors
axios.interceptors.response.use((response) => {
	return response
}, function(error){
	const originalRequest = error.config;
	if(error.response.status === 401 && originalRequest.url ===
		`${process.env.SERVER_URI}/refresh_token.php`){
			logout();
			router.push('/login');
			return Promise.reject(error);
		}
	if(error.response.status === 401 && !originalRequest._retry){
		originalRequest._retry = true;
		const refresh_token = JSON.parse(localStorage.getItem('user')).refresh_token;
		return axios.post(`${process.env.SERVER_URI}/refresh_token.php`,
						{
							"refresh_token" : refresh_token
						}
					).then(res => {
						if(res.status === 201){
							localStorage.setItem('user', JSON.stringify(res.data));
							axios.defaults.headers.common['Authorization'] = authHeader();
							return axios(originalRequest);
						}
					})
	}
	return Promise.reject(error);
})



export * from './user.service';
