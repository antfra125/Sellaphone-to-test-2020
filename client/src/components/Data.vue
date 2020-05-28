<template>
  <div class="datas">
    <div class="data">
      <input type="radio" v-model="data" name="data" value="50" placeholder="Data" />
      <label>10 GB</label>
    </div>
    <div class="data">
      <input type="radio" v-model="data" name="data" value="100" placeholder="Data" />
      <label>25 GB</label>
    </div>
    <div class="data">
      <input type="radio" v-model="data" name="data" value="150" placeholder="Data" />
      <label>50 GB</label>
    </div>
    <div class="data">
      <input type="radio" v-model="data" name="data" value="200" placeholder="Data" />
      <label>100 GB</label>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    data:{
      get(){
        return this.$store.state.data
      },
      set(value){
        this.$store.commit('setData', value)
        this.$store.commit('updateTotal')
      }
    }
  }
}
</script>