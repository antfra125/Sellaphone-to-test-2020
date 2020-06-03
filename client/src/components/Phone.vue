<template>
  <div class="picker">
    <div v-for="(phone, i) in phones" :key="i" class="phone">
      <img :src="phone.image" />
      <section>
        <h2>{{phone.name}}</h2>
        <ul>
          <li v-for="(feature, index) in phone.features.split(', ')" :key="index">{{feature}}</li>
        </ul>
      </section>
      <input
        type="radio"
        :value="phone.id"
        name="thePhone"
        :checked="chosenPhone.id==phone.id"
        @change="setPhone(phone)"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    chosenPhone(){
      return this.$store.state.phone
    },
    phones(){
      return this.$store.state.phones
    }
  },
  methods:{
    setPhone(phone){
      this.$store.commit('setPhone', phone)
      this.$store.commit('updateTotal')
      this.$store.commit('updateDiscounts')
      this.$store.commit('toggleExtra', 'airyFlayphones')
    }
  },
  created(){
    this.$store.dispatch('fetchPhones')
  }
}
</script>