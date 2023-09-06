<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import SelectedMovie from '../components/SelectedMovie.vue';
import type { IMovie } from '@/models/IMovie';
  
const selectedMovie = ref<IMovie | null>(null); 
const route = useRoute();
  
if (route.query.selectedMovie) {
    const queryParam = route.query.selectedMovie;
  
    if (Array.isArray(queryParam)) {
      selectedMovie.value = JSON.parse(queryParam[0] || 'null');
    } else {
      selectedMovie.value = JSON.parse(queryParam || 'null');
    }
}
</script>

<template>
    <SelectedMovie :selected-movie="selectedMovie"></SelectedMovie>
</template>
  

  <style scoped lang="scss">

  </style>