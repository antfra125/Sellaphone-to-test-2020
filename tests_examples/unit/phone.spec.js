import store from '@/store/index.js'

test('setPhone in store', ()=>{
  store.commit('setPhone', {
    "id": 1,
    "name": "iPhone Z",
    "features": "Semitransparent telefon, 5G ready, Handhållare",
    "price": 200,
    "image": "https://d2wsh2n0xua73e.cloudfront.net/wp-content/uploads/2019/04/iPhone-11-Concept-9.jpg"
  })

  expect(store.state.phone.id).toEqual(1)
  expect(store.state.phone.name).toEqual("iPhone Z")
  expect(store.state.phone.features).toEqual("Semitransparent telefon, 5G ready, Handhållare")
  expect(store.state.phone.price).toEqual(200)
  expect(store.state.phone.image).toEqual("https://d2wsh2n0xua73e.cloudfront.net/wp-content/uploads/2019/04/iPhone-11-Concept-9.jpg")

})