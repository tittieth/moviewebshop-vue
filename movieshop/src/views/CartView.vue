<script setup lang="ts">
    import OrderForm from "@/components/OrderForm.vue";
    import { cart } from "@/helpers/cart";

    const cartItems = cart.value
    console.log('cartview' + cartItems);
    
</script>
  
<template>
    <div v-for="item in cart" :key="item.productId">{{ item.product }}</div>
    <h1>Hello from cartview</h1>
    <OrderForm></OrderForm>
</template>