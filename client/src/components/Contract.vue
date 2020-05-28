<template>
  <div class="contracts">
    <select id="contract" v-model="contract" name="contract" placeholder="Contract">
      <option value="0">Välj:</option>
      <option value="100">24 mån Guld</option>
      <option value="150">18 mån Silver</option>
      <option value="100">12 mån Student</option>
      <option value="250">Ingen bindningstid</option>
      <option value="850">Global inclusive</option>
    </select>
  </div>
</template>

<script>
export default {
  computed:{
    contract:{
      get(){
        return this.$store.state.contract
      },
      set(value){
        this.$store.commit('setContract', value)
        this.$store.commit('updateTotal')
      }
    }
  }
}
</script>