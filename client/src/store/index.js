import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phone: 0,
    contract: 0,
    data: 0,
    extra: 0,
    total: 0
  },
  mutations: {
    setPhone(state, value){
      state.phone = parseInt(value)||0
    },
    setContract(state, value){
      state.contract = parseInt(value)||0
    },
    setData(state, value){
      state.data = parseInt(value)||0
    },
    setExtra(state, value){
      state.extra = parseInt(value)||0
    },
    updateTotal(state){
      state.total = state.phone + state.contract + state.data + state.extra
    }
  },
  actions: {
  },
  modules: {
  }
})
