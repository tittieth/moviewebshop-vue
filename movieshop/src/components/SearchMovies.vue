<script setup lang="ts">
import type { IMovie } from '@/models/IMovie';
import { getSearchedMovies } from '@/services/MovieService';
import { onMounted, ref } from 'vue';


const movies = ref<IMovie[]>([]);
const searchText = ref<string>("");

onMounted(async () => {
  searchText.value = localStorage.getItem("searchText") || "a";
  await searchMovies(searchText.value);
});

const searchMovies = async (searchText: string) => {
  movies.value = await getSearchedMovies(searchText);
  console.log(movies.value);
  
  localStorage.setItem("searchText", searchText);
};

const handleSubmit = () => {
    console.log(searchText.value);
    searchMovies(searchText.value);
} 

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="searchText"/> 
        <button>Sök-ikon</button>       
    </form>


    <div class="search-results-container">
        <div v-for="movie in movies" :key="movie.id">
    
            <img :src="movie.imageUrl" alt="Movie Poster" height="280" width="280"/>
            <p>{{ movie.name }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>