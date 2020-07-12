import { userService } from '../_services';

export const users = {
    namespaced: true,
    state: {
		all: {},
		loggedUser: null
    },
    actions: {
		getDetail({ commit }, idUser ) {
			commit('getDetailRequest');

			userService.getDetail(idUser)
				.then(
					user  => commit('getDetailSuccess',user),
					error => commit('getDetailFailure',error)
				);
		},
        getAll({ commit }) {
            commit('getAllRequest');

            userService.getAll()
                .then(
                    users => commit('getAllSuccess', users),
                    error => commit('getAllFailure', error)
                );
        }
    },
    mutations: {
		getDetailRequest(state) {
            state.loggedUser = { loading: true };
        },
        getDetailSuccess(state, user) {
            state.loggedUser =  user.data[0] ;
        },
        getDetailFailure(state, error) {
            state.loggedUser = { error };
        },
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, users) {
            state.all = { items: users };
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    }
}