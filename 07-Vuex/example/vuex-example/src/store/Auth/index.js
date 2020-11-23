export default {
  namespaced: true,
  state: {
    token: "",
  },
  actions: {
    handSetToken({ commit }, token) {
      commit("setToken", token);
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
};
