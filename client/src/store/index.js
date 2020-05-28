import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phone: 0,
    contract: 0,
    data: 0,
    extras: {
      airyFlayphones:{checked:false}
    },
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
    toggleExtra(state, name){
      state.extras[name].checked = !state.extras[name].checked
    },
    updateTotal(state){
      state.total = state.phone + state.contract + state.data
    }
  },
  actions: {
  },
  modules: {
  }
})
