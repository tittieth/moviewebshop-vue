<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { IMovie } from "../models/IMovie";
import ActionMovies from '../components/ActionMovies.vue';
import { getMovies } from '../services/MovieService'
import MovieHeader from '../components/MovieHeader.vue';


    const movies = ref<IMovie[]>([]);

    onMounted(async () => {
        try {
            movies.value = await getMovies();
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