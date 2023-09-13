<script setup lang="ts">
</script>

<template>
  <div class="header-container">
    <iframe
      class="movie-trailer"
      width="700"
      height="350"
      src="https://www.youtube.com/embed/TcMBFSGVi1c?si=-CdJ9UQLG96AOtkD"
      title="AVENGERS: ENDGAME All Movie Clips - Final Battle (2019)"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 150px !important;
  padding-top: 46.25%;

  .movie-trailer {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 768px) {
  .header-container {
    padding-top: 36.25%;
  }
}
</style>
