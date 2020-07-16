import axios from 'axios';

export const deviceService = {
	getAll,
	getDetail,
	getSensorData
};

function getAll(){
	return axios.get(`${process.env.SERVER_URI}/device.php`)
			.then(handleResponse)
			.then(data => { return data})
			.catch(handleError);
}

function getDetail(iddevice){
	return axios.get(`${process.env.SERVER_URI}/device.php?iddevice=${iddevice}`)
			.then(handleResponse)
			.then(data => { return data})
			.catch(handleError);
}

function getSensorData(iddevice, type, start_date, end_date,limit = null){
	return axios.get(`${process.env.SERVER_URI}/sensor.php?id_device=${iddevice}&
					sensor_type=${type}&start_date=${start_date}&end_date=${end_date}
					${limit !== null ? '&limit='+limit : ''}`)
			.then(handleResponse)
			.then(data => { return data})
			.catch(handleError);
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