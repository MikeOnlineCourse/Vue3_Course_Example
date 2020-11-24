import { createStore } from "vuex";
import { apiGetPhotoRequest } from "../api";

export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    async initLoad({ commit }) {
      try {
        const res = await apiGetPhotoRequest();
        commit("setPhoto", res.data);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
    handLoadState({ commit }, bool) {
      commit("setLoadState", bool);
    },
    handAddPage({ commit }) {
      commit("AddPage");
    },
    handRemovePage({ commit }) {
      commit("RemovePage");
    },
  },
  mutations: {
    setPhoto(state, payload) {
      state.photoArr = payload;
    },
    setLoadState(state, bool) {
      state.isLoad = bool;
    },
    AddPage(state) {
      state.idx++;
      if (state.idx > state.photoArr.length - 1) {
        state.idx = 0;
      }
    },
    RemovePage(state) {
      state.idx--;
      if (state.idx < 0) {
        state.idx = state.photoArr.length - 1;
      }
    },
  },
  getters: {
    isLoad(state) {
      return state.isLoad;
    },
    photoArr(state) {
      return state.photoArr;
    },
    idx(state) {
      return state.idx;
    },
  },
});
