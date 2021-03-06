import { userService } from '../_services';
import { router } from '../_helpers';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
	: { status: {}, user: null };
	
export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ dispatch, commit }, { email, password }) {
            commit('loginRequest', { email });

            userService.login(email, password)
                .then(
                    user => {
						commit('loginSuccess', user);
						dispatch('alert/success','Sukses Login', { root: true });
                        router.push('/home');
                    },
                    error => {
						commit('loginFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );
        },
        logout({ commit }) {
            userService.logout();
            commit('logout');
		},
		register({dispatch,commit},{fullname,email,password}){

            userService.register(fullname,email, password)
                .then(
                    resp => {
						dispatch('alert/success', resp.message, { root: true });
						router.push('/login');
                    },
                    error => {
                        dispatch('alert/error', error.message, { root: true });
                    }
                );
		}
    },
    mutations: {
        loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
		},
        logout(state) {
            state.status = {};
            state.user = null;
        }
    }
}