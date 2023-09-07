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
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="nav-icon-parent"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" class="nav-icon-path"/></svg></button>       
    </form>

    <h2>Resultat</h2>

    <div class="search-results-container">
        <div v-for="movie in movies" :key="movie.id">
    
            <img :src="movie.imageUrl" alt="Movie Poster" height="250" width="250"/>
            <p>{{ movie.name }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

form {
    margin: 20px;
    text-align: center;

    input {
        height: 38px;
    }

    button {
        position: absolute;
        margin: 8px 0 0 -40px;
        background-color: #5a082d00;
        width: 20px;
        box-shadow: none;
    }

    .nav-icon-parent {
            width: 20px;
    }

    .nav-icon-path {
        fill: #FDE4E4;
    }
}

h2 {
    text-align: center;
}

.search-results-container {
    text-align: center;

    div {
        padding: 20px;
        border-bottom: 2px solid #5A082D;
    }
}


</style>