import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const CHANGE_STATE1 = 'CHANGE_STATE1';

export default new Vuex.Store({
  state: {
    state1: 1,
  },
  mutations: {
    [CHANGE_STATE1](state, state1) {
      state.state1 = state1;
    },
  },
  actions: {

  },
});
