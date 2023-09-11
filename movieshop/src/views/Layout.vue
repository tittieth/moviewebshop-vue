<template>
    <div>
        <NavView></NavView>
      <main>
        <router-view><OrderForm></OrderForm></router-view>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
import NavView from "./NavView.vue";
  </script>
  