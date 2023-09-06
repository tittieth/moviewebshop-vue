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

        <div class="movie-info">
            <h3>{{ selectedMovie.name }}</h3>
            <ul>
                <li>Premiär: {{ selectedMovie.year }}</li>
                <li>Pris: {{ selectedMovie.price }}:-</li>
            </ul>
            <button>Köp</button>
        </div>

        <div class="movie-description">
            <h4>Handling</h4>
            <p>{{ selectedMovie.description }}</p>            
        </div>       
      </div>
    </div>
  </template>
  

  <style scoped lang="scss">

  .selected-movie-container {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  ul {
    list-style-type: none;
    margin-left: 0;
  }

  p {
    margin: 15px;
    max-width: 60vw;
  }

  button {
    margin: 20px;
  }

  @media screen and (min-width: 1024px) {

    h2 {
        margin-top: 10vh;
    }
    .selected-movie {
        display: grid;
        grid-template-areas: 
        ". . . ."
        ". img movieinfo ."
        ". moviedesc moviedesc ."
        ". . . .";
        width: 50vw;
        margin-top: 10vh;
    }

    img {
        grid-area: img;
    }

    .movie-info {
        grid-area: movieinfo;
        text-align: left;
        margin-top: 90px;

        h3 {
            margin-left: 15px;
        }

        ul {
            list-style-type: disc;
        }
    }

    .movie-description {
        grid-area: moviedesc;
        margin-top: 50px;
    }

  }

  </style>