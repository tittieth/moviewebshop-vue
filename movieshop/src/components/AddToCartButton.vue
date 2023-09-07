<script setup lang="ts">
import type { IMovie } from '@/models/IMovie'
import { cart } from '@/helpers/cart'

export interface IMovieViewProps {
  movie: IMovie | null
}

const props = defineProps<IMovieViewProps>()

const addToCart = () => {
  if (props.movie) {
    console.log('tillagd i varukorgen: ', props.movie.name)
    const { id, name, price } = props.movie

    const existingProduct = cart.value.find((item) => item.productId === id)

    if (existingProduct) {
      existingProduct.amount++
    } else {
      cart.value.push({ productId: id, product: name, amount: 1, price })
    }
  } else {
    console.log('error')
  }
  console.log(cart.value)
}
</script>

<template>
  <button @click="addToCart">Köp film</button>
</template>

<style scoped lang="scss"></style>
