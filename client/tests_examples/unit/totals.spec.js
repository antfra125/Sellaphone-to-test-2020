import store from '@/store/index.js'

describe('testing total calculations', ()=>{

  test('add phone price to total', ()=>{
    store.commit('setPhone', {price:200, name: 'iPhone Z', id:1})
    store.commit('updateTotal')
    store.commit('updateDiscounts')
    expect(store.state.total).toEqual(180) // @bug 200
  })

  test('add contract price to total', ()=>{
    store.commit('setContract', {price:150, name: '18 mån Silver', id:2})
    store.commit('updateTotal')
    store.commit('updateDiscounts')
    expect(store.state.total).toEqual(180) // @bug (350 * 0.9)
  })

})