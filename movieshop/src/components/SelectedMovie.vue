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
    <div class="selected-movie-container">
      <h2>Vald film</h2>
      <div v-if="selectedMovie" class="selected-movie">
        <img :src="selectedMovie.imageUrl" alt="Movie Poster" height="280" width="280" />
        <h3>{{ selectedMovie.name }}</h3>
        <ul>
            <li>Premiär: {{ selectedMovie.year }}</li>
            <li>Pris: {{ selectedMovie.price }}:-</li>
        </ul>
        <button>Köp</button>

        <div class="movie-description">
            <h4>Handling</h4>
            <p>{{ selectedMovie.description }}</p>            
        </div>
      </div>
    </div>
  </template>
  

  <style scoped lang="scss">

  .selected-movie-container {
    text-align: center;
    padding: 20px;
  }

  h2 {
    text-align: center;
    padding: 10px;
  }

  h3 {
    margin: 10px;
  }

  img {
    margin: auto;
  }

  p {
    margin: 10px;
  }

  button {
    margin: 20px;
  }

  @media screen and (min-width: 1024px) {
    .selected-movie {
        display: grid;
    }

  }

  </style>