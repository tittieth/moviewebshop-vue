<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MovieHeader from '../components/MovieHeader.vue'
import AddToCartButton from '../components/AddToCartButton.vue'
import { handleImgError } from '@/helpers/index'
// import { useMoviesStore } from '@/stores/movies'
import type { IMovie } from '@/models/IMovie'
import { getCategories, getMovies } from '@/services/MovieService'
import { type ICategory } from '@/models/ICategory'
import {cart} from '@/stores/cart'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useRouter } from 'vue-router';


// const moviesStore = useMoviesStore();
// const movies = moviesStore.movies;

// onMounted(async ()=> {
//     await moviesStore.fetchMovies();
// });

const movies = ref<IMovie[]>([])
const categories = ref<ICategory[]>([])

const router = useRouter();

function settings() {
  return {
    itemsToShow: 1,
		snapAlign: "start"
  }
}

onMounted(async () => {
  try {
    movies.value = await getMovies()
    categories.value = await getCategories()
    console.log(movies.value)
    console.table(categories.value)
  } catch (error) {
    console.log(error)
  }

  settings();
})

const breakpoints = {
  310: {
    itemsToShow: 1.5,
    snapAlign: "start"
  },
  360: {
    itemsToShow: 2,
    snapAlign: "start"
  },
  450: {
    itemsToShow: 2.5,
    snapAlign: "start"
  },
  540: {
    itemsToShow: 3,
    snapAlign: "start"
  },
  630: {
    itemsToShow: 3.5,
    snapAlign: "start"
  },
  720: {
    itemsToShow: 4,
    snapAlign: "center"
  },
  810: {
    itemsToShow: 4.5,
    snapAlign: "center"
  },
  900: {
    itemsToShow: 5,
    snapAlign: "center"
  },
  990: {
    itemsToShow: 5.5,
    snapAlign: "center"
  },
  1080: {
    itemsToShow: 6,
    snapAlign: "center"
  },
  1170: {
    itemsToShow: 6,
    snapAlign: "center"
  },
}

function filteredMovies(categoryId: number) {
  return movies.value.filter((movie) =>
    movie.productCategory.some((cat) => cat.categoryId === categoryId)
  );
}

function showClickedMovie(movie: IMovie) {
  const routeParams = {
    name: 'movie',
    params: { id: movie.id },
    query: { selectedMovie: JSON.stringify(movie) }
  };

  router.push(routeParams);
}
</script>

<template>
  <MovieHeader />
  <div class="wrapper">
    <div v-for="category in categories" :key="category.id" class="category">
      <h2>{{ category.name }}</h2>
      <div class="carousel-items-container">
        <carousel :settings="settings" :breakpoints="breakpoints" class="carousel">
          <slide v-for="movie in filteredMovies(category.id)" :key="movie.id" class="category">
              <div class="carousel__item">
              <!-- <router-link :to="`/movie/${movie._id}`"> -->
                <div class="movie-poster-container">
                  <div class="image-container">
                    <img :src="movie.imageUrl"  alt="" @click="() => showClickedMovie(movie)" @error="handleImgError(movie)" >
                  </div>
                  <div class="movie-bottom-container">
                    <p>{{movie.name }}</p>
                    <AddToCartButton :movie="movie" :cart="cart"/>
                  </div>
                </div>
              </div>
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@600;700;800;900&display=swap");

  h2 {
    color: #FDE4E4;
    font-size: 2rem;
    font-family: 'Inter', sans-serif;
    text-align: center;
  }

  p {
    padding: 10px 0;
    font-size: 0.8rem;
    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Arial;
    margin: auto;
  }


  .wrapper {
    padding: 10px;
    max-width: 1170px;
    margin: auto;

    .image-container {
      position: relative;
      display: block;
      width: 100%;
      height: 244px;

      &::after {
        box-sizing: inherit;
      }

      &::before {
        box-sizing: inherit;
      }
      
      img {
        max-width: 100%;
        height: 244px;
        padding: 10px;
      }
    }
  }

  .movie-bottom-container {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1024px) {
    
  }
</style>
