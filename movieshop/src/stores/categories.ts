import type { ICategory } from '@/models/ICategory';
import { getCategories } from '@/services/MovieService';
import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [] as ICategory[],
  }),
  actions: {
    async fetchCategories() {
      try {
        this.categories = await getCategories();
      } catch (error) {
        console.error(error);
      }
    },
  },
});
