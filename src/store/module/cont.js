export default {
    state: {
        cont: 1,
        list: [
            { 'a': '111' }, 
            { 'a': '222' }
        ]
    },
    getters: {

        getList: state => {
            return state.list;
        },

        getListLength: (state, getters) => {
            return getters.getList.length;
        }

    },
    actions: {

        addCont({ state, commit }) {
            commit('setCont');
        },

        reduceCont({ state, commit }) {
            commit('removeCont');
        }

    },
    mutations: {

        setCont(state) {
            state.cont = state.cont + 1
        },

        removeCont(state) {
            state.cont = state.cont - 1
        }

    }
}
