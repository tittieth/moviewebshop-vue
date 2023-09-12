<script setup lang="ts">
import type { IMovie } from '@/models/IMovie';
import { getMovies, getSearchedMovies } from '@/services/MovieService';
import { onMounted, ref } from 'vue';
import  AddToCartButtonVue  from './AddToCartButton.vue';
import {cart} from '@/stores/cart'

const movies = ref<IMovie[]>([]);
const searchText = ref<string>("");

onMounted(async () => {
  searchText.value = localStorage.getItem("searchText") || "a";
  await searchMovies(searchText.value);
});

const searchMovies = async (searchText: string) => {

    if (searchText.length === 1) {
        const allMovies = await getMovies();
        movies.value = allMovies.filter(movie =>
        movie.name.toLowerCase().startsWith(searchText.toLowerCase())
        )
    } else {
        movies.value = await getSearchedMovies(searchText);
    }

  localStorage.setItem("searchText", searchText);
}; 

const handleSubmit = () => {
    searchMovies(searchText.value);
} 

</script>

<template>
    <h2>Sök</h2>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="searchText"/> 
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="nav-icon-parent"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" class="nav-icon-path"/></svg></button>       
    </form>

    <h3>Resultat</h3>

    <div class="search-results-container">

        <div v-if="movies.length === 0" class="no-results-container">
            <p>Din sökning gav inga träffar</p>
        </div>

        <div v-else>
            <div v-for="movie in movies" :key="movie.id" class="single-movie-container">
    
                <div class="image-container">
                    <img :src="movie.imageUrl" alt="Movie Poster" height="250" width="250"/>
                </div>

                <h4>{{ movie.name }}</h4>
                <AddToCartButtonVue :movie="movie" :cart="cart"></AddToCartButtonVue>
            </div>            
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

        &:hover {
            border: none;
        }
    }

    .nav-icon-parent {
        width: 20px;
    }

    .nav-icon-path {
        fill: #FDE4E4;
    }
}

h2 {
    margin: 20px;
    text-align: center;
}

h3 {
    text-align: center;
}

h4 {
    margin: 5px;
}

.search-results-container {
    text-align: center;

    .single-movie-container {
        padding: 20px;
        border-bottom: 2px solid #5A082D;

        .image-container {
        width: 200px;
        margin: auto;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

        button {
            margin: 10px;
        }
    }
}

.no-results-container {
    p {
        padding: 20px;
    }
}

@media screen and (min-width: 1024px) {

    h2 {
        margin: 40px;
    }

    input {
        width: 500px;
        min-height: 48px;
        font-size: 20px;
    }

    .nav-icon-parent {
        position: absolute;
        margin: -10px 0 0 -20px;
        min-width: 30px;
    }

    .search-results-container {

        margin: 2% 10%;
        border: 1px solid #5A082D;
        border-radius: 20px 20px 0 0;

        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;  
        }

        .single-movie-container {
            flex: 30%;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;

            .image-container {
                width: 300px;
            }

            button {
                font-size: 20px;
                min-width: 150px;
                height: 48px;
            }

        }
    }
}

</style>