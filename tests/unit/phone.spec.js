// mocking tools (fetch mock)

// vue store
import store from '../../store/index.js'

// vue test tools
import {mount} from '@vue/test-utils'

// component(s)
import Phone from '../../components/Phone'

// test data
let phoneData = [
  {
    "id": 1,
    "name": "iPhone Z",
    "features": "Semitransparent telefon, 5G ready, Handhållare",
    "price": 200,
    "image": "https://d2wsh2n0xua73e.cloudfront.net/wp-content/uploads/2019/04/iPhone-11-Concept-9.jpg"
  },
  {
    "id": 2,
    "name": "iPhone G",
    "features": "Armbandstelefon, Projicerad skärm, Virtual touch",
    "price": 250,
    "image": "https://images.techhive.com/images/idge/imported/imageapi/2015/01/14/17/011011-iphoney5-2-100546391-gallery.idge.jpg"
  }
]


describe('component', ()=>{
  let phoneComponent = mount(Phone, {store})
  test('select phone 1', ()=>{
    phoneComponent.vm.setPhone(phoneData[0])
    expect(store.state.phone).toEqual(phoneData[0])
  })
  test('select phone 2', ()=>{
    phoneComponent.vm.setPhone(phoneData[1])
    expect(store.state.phone).toEqual(phoneData[1])
  })
})

describe('store', ()=>{

  test('setPhones to store', ()=>{
    store.commit('setPhones', phoneData)
    expect(store.state.phones).toEqual(phoneData)
  })

  test('setPhone from phones in store', ()=>{
    store.commit('setPhone', store.state.phones[0])
    expect(store.state.phone.id).toEqual(1)
    expect(store.state.phone.name).toEqual("iPhone Z")
    expect(store.state.phone.features).toEqual("Semitransparent telefon, 5G ready, Handhållare")
    expect(store.state.phone.price).toEqual(200)
    expect(store.state.phone.image).toEqual("https://d2wsh2n0xua73e.cloudfront.net/wp-content/uploads/2019/04/iPhone-11-Concept-9.jpg")

  })

})
