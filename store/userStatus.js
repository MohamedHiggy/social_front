export default {
    state: () => ({
        user_status: {},
    }),
    mutations: {
        UPDATE_USER_STATUS(state, user_status) {
            state.user_status = user_status;
        },
    },
    getters: {
        getUserStatus(state) {
            return state.user_status
        },
    },
    actions: {}
}