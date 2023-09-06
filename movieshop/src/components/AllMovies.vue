<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import type { IMovie } from "../models/IMovie";
import ActionMovies from '../components/ActionMovies.vue';
import MovieHeader from '../components/MovieHeader.vue';

    const movies = ref<IMovie[]>([]);

    onMounted(async () => {
        try {
            const response = await axios.get("https://medieinstitutet-wie-products.azurewebsites.net/api/products");
            movies.value = response;
            console.log(movies.value);
        
        } catch (error) {
            console.log(error);
        }
    })

    function movie() {
        console.log(movie.id)
    }
</script>

<template>
    <MovieHeader />
    <ActionMovies :moviesByCategory="movie"></ActionMovies>
</template>

<style scoped lang="scss">

</style>