<template>
  <div id="app">
    <Notice></Notice>
    <h1 class="logo">Sellaphone</h1>
    <OrderForm></OrderForm>
    <Confirm></Confirm>
  </div>
</template>

<script>
import Notice from '@/components/Notice'
import OrderForm from '@/components/OrderForm'
import Confirm from '@/components/Confirm'
export default {
  components:{
    Notice,
    OrderForm,
    Confirm
  }
}
</script>

<style src="./style.css"></style>
