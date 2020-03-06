import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testInfo: []
  },
  mutations: {
    setTestInfo(state, testInfo) {
      state.testInfo.push(testInfo);
    }
  }
});
