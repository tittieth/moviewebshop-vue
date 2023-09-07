<template>
    <div>
        <NavView></NavView>
      <main>
        <router-view>
          <SearchMovies></SearchMovies>
        </router-view>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
import SearchMovies from "@/components/SearchMovies.vue";
import NavView from "./NavView.vue";
  </script>
  