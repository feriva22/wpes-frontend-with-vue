
export const navigation = {
    namespaced: true,
    state: {
        group: null
    },
    actions: {
        change({ commit }, group) {
            commit('change', group);
        }
    },
    mutations: {
        change(state, group) {
            state.group = group;
        }
    }
}