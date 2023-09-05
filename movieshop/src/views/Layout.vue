<template>
    <div>
        <NavView></NavView>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
    import NavView from "./NavView.vue";
  </script>
  