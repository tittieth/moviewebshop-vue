<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const orderName = route.query.ordername
console.log(orderName)
</script>

<template>
  <div class="wrapper">
    <h1>Tack för din order {{ orderName }}!</h1>
    <p>Vi hoppas att du blir nöjd.</p>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  background-color: #9d0b28;
  padding: 20px;
}
</style>
