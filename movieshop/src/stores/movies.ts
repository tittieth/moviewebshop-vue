import type { ICategory } from "@/models/ICategory";
import type { IMovie } from "@/models/IMovie";
import { getMovies } from "@/services/MovieService";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore('movies', {
    state: () => ({
      movies: [] as IMovie[],
    }),
    getters: {
      allMovies: (state) => state.movies,
      getMoviesByCategory: (state) => (movie: IMovie, category: ICategory) => {
        return state.movies.filter((movie) => movie.productCategory.categoryId === category.id);
      }
    },
    actions: {
      async fetchMovies() {
        try {
          this.movies = await getMovies();
        } catch (error) {
          console.error(error);
        }
      },
    },
  });