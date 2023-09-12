<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const orderName = route.query.ordername
</script>

<template>
  <div class="wrapper">
    <h1>Tack för din order {{ orderName }}!</h1>
    <p>Vi hoppas att du blir nöjd.</p>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 90%;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  background-color: #9d0b28;
  padding: 20px;

  h1 {
    font-size: 1.4rem;
    padding: 5px;
  }
}
</style>
