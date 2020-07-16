import { deviceService } from '../_services';

export const device = {
    namespaced: true,
    state: {
		all: {},
		deviceDetail: null
    },
    actions: {
		getDetail({ commit }, idDevice ) {
			commit('getDetailRequest');

			deviceService.getDetail(idDevice)
				.then(
					user  => commit('getDetailSuccess',user),
					error => commit('getDetailFailure',error)
				);
		},
        getAll({ commit }) {
            commit('getAllRequest');

            deviceService.getAll()
                .then(
                    device => {
						commit('getAllSuccess', device)
					},
                    error => commit('getAllFailure', error)
                );
        }
    },
    mutations: {
		getDetailRequest(state) {
            state.deviceDetail = { loading: true };
        },
        getDetailSuccess(state, user) {
            state.deviceDetail =  user.data[0] ;
        },
        getDetailFailure(state, error) {
            state.deviceDetail = { error };
        },
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, device) {
            state.all =  device.data ;
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    }
}