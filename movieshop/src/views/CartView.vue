<script setup lang="ts">
import CartItems from '@/components/CartItems.vue'
import OrderForm from '@/components/OrderForm.vue'
</script>

<template>
  <h1>Din varukorg</h1>
  <CartItems />
  <OrderForm></OrderForm>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin: 30px;
}
</style>
