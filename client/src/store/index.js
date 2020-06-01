import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phone: {price:0},
    phones:[],
    contract: 0,
    data: 0,
    extras: {
      airyFlayphones:{checked:false},
      boomyBassBox:{checked:false},
      cloudyInsurance:{checked:false},
      recognizeFace:{checked:false},
    },
    total: 0
  },
  mutations: {
    setPhone(state, phone){
      state.phone = phone
    },
    setPhones(state, phones){
      state.phones = phones
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
      state.total = state.phone.price + state.contract + state.data
    },
    updateDiscounts(state){
      if(state.phone.name === 'iPhone Z' && state.contract === 150){
        state.total = state.total * 0.9
      }
    }
  },
  actions: {
    async fetchPhones({commit}){
      let response = await fetch('api/phones')
      let phones = await response.json()
      commit('setPhones', phones)
    }
  }
})
