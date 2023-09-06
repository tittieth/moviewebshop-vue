<script setup lang="ts">
import type { IMovie } from '@/models/IMovie';
import type { PropType } from 'vue';

const props = defineProps({
  selectedMovie: {
    type: Object as PropType<IMovie | null>,
    required: true,
  },
})

</script>

<template>
    <div>
      <h2>Vald film</h2>
      <div v-if="selectedMovie">
        <img :src="selectedMovie.imageUrl" alt="Movie Poster" height="300" width="300" />
        <h3>{{ selectedMovie.name }}</h3>
        <p>Premiär: {{ selectedMovie.year }}</p>
        <p>Pris: {{ selectedMovie.price }}:-</p>
        <button>Köp</button>

        <h4>Handling</h4>
        <p>{{ selectedMovie.description }}</p>
      </div>
    </div>
  </template>
  

  <style scoped lang="scss">

  </style>