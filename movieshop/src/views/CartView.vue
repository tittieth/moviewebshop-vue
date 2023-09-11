<script setup lang="ts">
import CartItems from '@/components/CartItems.vue'
import OrderForm from '@/components/OrderForm.vue'
import { formatCurrentDate } from '@/helpers';
import type { ICart } from '@/models/ICart';
import { cart } from '@/stores/cart';
import axios from 'axios';
import { computed } from 'vue';

interface IProduct {
  productId: number
  product: string | null
  amount: number
  orderId: number
}

const totalCartPrice = computed(() => {
  return cart.value.reduce((total, item) => {
    return total + item.price * item.amount
  }, 0)
})

const createProductsObject = (cartItem: ICart) => {
  return {
    productId: cartItem.productId,
    product: null,
    amount: cartItem.amount,
    orderId: 8314
  }
}

const handleSubmit = async (name: string, paymentMethod: string) => {
  console.log('form submitted')
  console.log(name + paymentMethod);
  

  const itemsArray: IProduct[] = cart.value.map((cartItem) => createProductsObject(cartItem))
  console.log(itemsArray)

  const formattedDate = formatCurrentDate()

  const order = {
    companyId: 0,
    created: formattedDate,
    createdBy: name,
    paymentMethod: paymentMethod,
    totalPrice: totalCartPrice.value,
    status: 0,
    orderRows: itemsArray
  }

  console.log(order);
  

  try {
    const response = await axios.post(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
      order
    )
    console.log('order skapad' + response.data)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <h1>Din varukorg</h1>
  <CartItems :totalPrice="totalCartPrice"/>
  <OrderForm @submitOrder="handleSubmit"></OrderForm>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin: 30px;
}
</style>
