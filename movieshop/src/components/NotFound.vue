<script setup lang="ts"></script>

<template>
  <div class="not-found">
    <div>
      <img src="../assets/images/kopiera.jpg" height="200" width="200" />
    </div>
    <router-link to="/" class="home-link">Tillbaka</router-link>
  </div>
</template>

<style lang="scss">
.not-found {
  width: 90%;
  margin: auto;
  margin-top: 10%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .home-link {
    font-size: 1.5rem;
    background-color: #baaecf;
    border-radius: 60px;
    box-shadow: 0 3px 3px 0 #00000073;
    padding: 5px 15px;
    margin-top: 15px;
  }
}
  @media screen and (min-width: 768px) {
    .not-found {
    width: 80%;

    .home-link {
        font-size: 2.5rem;
    }
    }

  }

  @media screen and (min-width: 1224px) { 
    .not-found {
        width: 50%;
        margin-top: 40px;

        .home-link {
        font-size: 3.5rem;
    }
    }
  }

</style>
