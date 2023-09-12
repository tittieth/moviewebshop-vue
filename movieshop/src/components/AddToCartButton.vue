<script setup lang="ts">
import type { IMovie } from '@/models/IMovie'
import { cart } from '@/stores/cart'

export interface IMovieViewProps {
  movie: IMovie | null
}

const props = defineProps<IMovieViewProps>()

const addToCart = () => {
  if (props.movie) {
    const { id, name, price, imageUrl } = props.movie
    const cartCopy = [...cart.value]
    const existingProduct = cartCopy.find((item) => item.productId === id)

    if (existingProduct) {
      existingProduct.amount++
    } else {
      cartCopy.push({ productId: id, product: name, amount: 1, price, imageUrl: imageUrl })
    }

    cart.value = cartCopy
  } else {
    console.log('error')
  }
}
</script>

<template>
  <button @click="addToCart">Köp film</button>
</template>

<style scoped lang="scss"></style>
