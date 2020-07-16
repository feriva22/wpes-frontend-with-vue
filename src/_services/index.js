import { authHeader,router } from '../_helpers';
import axios from 'axios';
import { store } from '../_store';
export * from './user.service';
export * from './device.service';

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
	//check connection
	if(!error.response){
		router.push('/login').catch(()=>{});
		return Promise.reject(error);
	} else if(error.response.status === 401 && originalRequest.url ===
		`${process.env.SERVER_URI}/refresh_token.php`){
			store.dispatch('alert/confirm',{
				message : 'Session Expired, Please Login !',
				labels : 'Warning',
				onOk : function() {
					router.push('/login').catch(()=>{});
				}
			})
			return Promise.reject(error);
		}
	else if(error.response.status === 401 && !originalRequest._retry){
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
	else {
		return Promise.reject(error);
	}
})




