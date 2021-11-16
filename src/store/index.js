import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import detail from './modules/detail'

export default new Vuex.Store({
  modules: {
    detail:detail
  },
  state:{},
  mutations:{},
  actions:{}
})