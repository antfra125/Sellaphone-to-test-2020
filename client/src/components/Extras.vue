<template>
  <div class="extras">
    <div class="extra">
      <label>Boomy bass box</label>
      <input type="checkbox" v-model="boomyBassBox" value="50" placeholder="Extras" />
    </div>
    <div class="extra">
      <label>Cloudy insurance</label>
      <input type="checkbox" v-model="cloudyInsurance" value="75" placeholder="Extras" />
    </div>
    <div class="extra">
      <label>Recognize face</label>
      <input type="checkbox" v-model="recognizeFace" value="20" placeholder="Extras" />
    </div>
    <div class="extra">
      <label>Airy Flayphones</label>
      <input type="checkbox" v-model="airyFlayphones" value="30" placeholder="Extras" />
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    airyFlayphones:{
      get(){
        return this.$store.state.extras.airyFlayphones.checked
      },
      set(){
        this.$store.commit('toggleExtra', 'airyFlayphones')
      }
    }
  }
}
</script>