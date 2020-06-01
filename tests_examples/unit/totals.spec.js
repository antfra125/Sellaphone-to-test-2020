import store from '@/store/index.js'

describe('testing total calculations', ()=>{

  test('add phone price to total', ()=>{
    store.commit('setPhone', {price:200, name: 'iPhone Z'})
    store.commit('updateTotal')
    store.commit('updateDiscounts')
    expect(store.state.total).toEqual(200)
  })

  test('add contract price to total', ()=>{
    store.commit('setContract', 150)
    store.commit('updateTotal')
    store.commit('updateDiscounts')
    expect(store.state.total).toEqual(350 * 0.9)
  })

})