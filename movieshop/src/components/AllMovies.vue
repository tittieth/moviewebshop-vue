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


// const moviesStore = useMoviesStore();
// const movies = moviesStore.movies;

// onMounted(async ()=> {
//     await moviesStore.fetchMovies();
// });

const movies = ref<IMovie[]>([])
const categories = ref<ICategory[]>([])

onMounted(async () => {
  try {
    movies.value = await getMovies()
    categories.value = await getCategories()
    console.log(movies.value)
    console.table(categories.value)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <MovieHeader />
  <div class="wrapper">
    <div v-for="category in categories" :key="category.id" class="category">
      <h2>{{ category.name }}</h2>
      <ul class="movies">
        <li v-for="movie in movies" :key="movie.id">
          <div v-if="movie.productCategory.some((cat) => cat.categoryId === category.id)">
            <RouterLink
              :to="{
                name: 'movie',
                params: { id: movie.id },
                query: { selectedMovie: JSON.stringify(movie) }
              }"
            >
              <img :src="movie.imageUrl" height="50" width="50" @error="handleImgError(movie)" />
            </RouterLink>
              <p>{{ movie.name }}</p>
              <AddToCartButton :movie="movie" :cart="cart"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
h2 {
  color: FDE4E4;
  font-size: 2rem;
}
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
}
.category {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  padding: 10px;

  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin-inline-start: 0;
    margin-top: 50px;
    list-style: none;
    width: 100%;
    overflow-x: auto;

    li {
      cursor: pointer;
      text-align: left;
      position: relative;

      div {
        display: flex;
        flex-direction: column;
        min-height: 240px;
        max-width: 170px;
        margin-inline-end: 10px;

        img {
          width: 120px;
          height: 160px;
        }

        p {
          padding: 10px 0;
          font-size: 0.8rem;
          max-width: 120px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        button {
          position: absolute;
          width: 65px;
          height: 25px;
          bottom: 15px;
        }
      }
    }
  }
}
</style>
