<script setup lang="ts">
import type { IMovie } from '@/models/IMovie';
import type { PropType } from 'vue';
import AddToCartButton from './AddToCartButton.vue';

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
        <div class="image-container">
            <img :src="selectedMovie.imageUrl" alt="Movie Poster" height="280" width="280" /> 
        </div>


        <div class="movie-info">
            <h3>{{ selectedMovie.name }}</h3>
            <ul>
                <li>Premiär: {{ selectedMovie.year }}</li>
                <li>Pris: {{ selectedMovie.price }}:-</li>
            </ul>
            <AddToCartButton :movie="props.selectedMovie"/>
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

  .image-container {
        grid-area: img;
        width: 200px;
        margin: auto;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
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
        margin: 20px 0 30px 0;
        font-size: 48px;
    }
    .selected-movie {
        display: grid;
        grid-template-areas: 
        ". . . ."
        ". img movieinfo ."
        ". moviedesc moviedesc ."
        ". . . .";
        margin: 20px;
        margin-top: 10px;
    }

    .image-container {
        width: 300px;
    }

    .movie-info {
        grid-area: movieinfo;
        text-align: left;
        margin-top: 90px;

        h3 {
            margin-left: 15px;
            font-size: 32px;
        }

        ul {
            list-style-type: disc;

            li {
                font-size: 24px;
            }
        }

        button {
            font-size: 24px;
            min-width: 150px;
            height: 48px;
        }
    }

    .movie-description {
        grid-area: moviedesc;
        margin-top: 50px;

        h4 {
            font-size: 28px;
        }

        p {
            font-size: 20px;
            text-align: left;
            width: 30vw;
        }
    }

  }

  </style>