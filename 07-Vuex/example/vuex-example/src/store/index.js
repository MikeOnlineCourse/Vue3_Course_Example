import { createStore } from "vuex";
import state from "./state.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

export default createStore({
  state,
  actions,
  mutations,
  getters,
});
