import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    loggedIn: false,
  },
  mutations: {
    SET_USER(state, user) {
      state.currentUser = user
    },
    LOGGED_IN(state, b) {
      state.loggedIn = b
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    loggedIn({ commit }, b) {
      commit('LOGGED_IN', b)
    }
  },
  modules: {}
});
