<script setup lang="ts">
import CartItems from '@/components/CartItems.vue'
import OrderForm from '@/components/OrderForm.vue'
import { formatCurrentDate } from '@/helpers';
import type { ICart } from '@/models/ICart';
import type { IOrder } from '@/models/IOrder';
import type { IProduct } from '@/models/IProduct';
import router from '@/router';
import { createOrder } from '@/services/MovieService';
import { cart } from '@/stores/cart';
import { computed } from 'vue';

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
  const itemsArray: IProduct[] = cart.value.map((cartItem) => createProductsObject(cartItem))

  const formattedDate = formatCurrentDate()

  const order: IOrder = {
    companyId: 0,
    created: formattedDate,
    createdBy: name,
    paymentMethod: paymentMethod,
    totalPrice: totalCartPrice.value,
    status: 0,
    orderRows: itemsArray
  }

  try {
    await createOrder(order)
    router.push({ path: '/orderconfirmation/', query: { ordername: order.createdBy }})
    cart.value = [];
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
