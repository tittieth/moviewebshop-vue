<script setup lang="ts">
import type { IMovie } from '@/models/IMovie';

export interface IMovieViewProps {
  movie: IMovie | null;
}

const props = defineProps<IMovieViewProps>();


const addToCart = () => {
    if (props.movie) {
    console.log('tillagd i varukorgen: ', props.movie.name);
  } else {
    console.log('error');
  }
}
</script>

<template>
  <button @click="addToCart">Köp film</button>
</template>

<style scoped lang="scss">
</style>