<template>
  <div id="details">
    <button id="open-order" @click="toggleOrderForm">Beställ</button>
    <div v-if="showOrderForm">
      <input type="hidden" v-model="price" value="0" />
      <input type="text" v-model="firstName" placeholder="Förnamn" required />
      <input type="text" v-model="lastName" placeholder="Efternamn" required />
      <input type="tel" v-model="phoneNumber" placeholder="Telefonnr" required />
      <input type="email" v-model="email" placeholder="E-postadress" required />
      <input type="number" v-model="street" placeholder="Gatuadress" required />
      <input type="text" v-model="zip" placeholder="Postnr" required />
      <input type="text" v-model="city" placeholder="Ort" required />
      <input type="submit" value="Skicka" />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showOrderForm: false
    }
  },
  methods:{
    toggleOrderForm(e){
      e.preventDefault()
      this.showOrderForm = !this.showOrderForm
    }
  }
}
</script>