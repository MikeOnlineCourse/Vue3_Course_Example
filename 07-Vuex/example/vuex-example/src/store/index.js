import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen: false,
  },
  actions: {
    handOpenState(context) {
      const isOpen = !context.state.isOpen;
      context.commit("OpenState", isOpen);
    },
  },
  mutations: {
    OpenState(state, payload) {
      state.isOpen = payload;
    },
  },
  getters: {
    isOpen(state) {
      return state.isOpen;
    },
  },
});
