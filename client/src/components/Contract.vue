<template>
  <div class="contracts">
    <select id="contract" v-model="chosenContract">
      <option value="0">Välj:</option>
      <option v-for="(option, index) in contracts" :key="index" :value="option.id">{{option.name}}</option>
    </select>
  </div>
</template>

<script>
export default {
  computed:{
    chosenContract:{
      get(){
        return this.$store.state.contract.id||0
      },
      set(id){
        this.$store.commit('setContract', id)
        this.$store.commit('updateTotal')
        this.$store.commit('updateDiscounts')
      }
    },
    contracts(){
      return this.$store.state.contracts
    }
  },
  created(){
    this.$store.dispatch('fetchContracts')
  }
}
</script>