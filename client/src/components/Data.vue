<template>
  <div class="datas">
    <div v-for="(data, i) in datas" :key="i" class="data">
      <input
        type="radio"
        :value="data.id"
        name="theData"
        :checked="chosenData.id==data.id"
        @change="setData(data)"
      />
      <label>{{data.name}}</label>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    chosenData(){
      return this.$store.state.data
    },
    datas(){
      return this.$store.state.datas
    }
  },
  methods:{
    setData(data){
      this.$store.commit('setData', data)
      this.$store.commit('updateTotal')
      this.$store.commit('updateDiscounts')
    }
  },
  created(){
    this.$store.dispatch('fetchDatas')
  }
}
</script>