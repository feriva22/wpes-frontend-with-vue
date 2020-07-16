
export const alert = {
    namespaced: true,
    state: {
        type: null,
        message: null
    },
    actions: {
        success({ commit }, message) {
            commit('success', message);
        },
        error({ commit }, message) {
			commit('error', message);
        },
        confirm({ commit }, {message, labels, onOk}){
			commit('confirm', {message, labels, onOk})
		}
    },
    mutations: {
        success(state, message) {
            state.type = 'success';
            state.message = message;
        },
        error(state, message) {
            state.type = 'error';
            state.message = message;
        },
        confirm(state, { message, labels, onOk}){
			state.type = 'confirm';
			state.message = message;
			state.labels = labels;
			state.onOk = onOk;
		}
    }
}