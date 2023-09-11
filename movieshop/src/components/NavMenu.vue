<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
const screenSize = ref();

let width = document.documentElement.clientWidth;

function controlScreenSize() {
    if (width > 899) {
        console.log("width", width);
        screenSize.value = true;
    } else {
        screenSize.value = false;
    }
}

function updateScreenSize() {
    width = document.documentElement.clientWidth;
}

function init() {
    window.addEventListener("resize", updateScreenSize);
    window.addEventListener("resize", controlScreenSize);

    updateScreenSize()

    if (width < 910) {
        screenSize.value = true;
    }
}

init(); 

function handleMenuClick() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div class="desktop-nav" v-if="screenSize">
    <div class="left-side">
      <router-link to="/" class="desktop-nav-links">Hem</router-link>
    </div>
    <div class="right-side">
      <router-link to="/" class="desktop-nav-links"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="nav-icon-parent"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" class="nav-icon-path"/></svg></router-link>
      <router-link to="/cart" class="desktop-nav-links"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="nav-icon-parent"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" class="nav-icon-path"/></svg></router-link>
    </div>
  </div>
  <div class="hamburger-parent-container" :class="{ 'parent-open': menuOpen }">
    <div class="hamburger-mobile-container" :class="{ 'hide': screenSize }">
      <div class="hamburger-container" @click="handleMenuClick" :class="{ 'menu-open': menuOpen }">
        <div v-if="menuOpen" class="nav-open-icons">
          <router-link to="/"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="nav-icon-parent">
              <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" class="nav-icon-path"/></svg>
          ></router-link>
          <router-link to="/cart"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="nav-icon-parent">
              <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                class="nav-icon-path"
              /></svg>
          ></router-link>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="nav-icon-parent">
            <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              class="nav-icon-path"
            />
          </svg>
        </div>
        <div class="nav-closed-icon">
          <svg
            v-if="!menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="nav-icon-parent"
          >
            <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              class="nav-icon-path"
            />
          </svg>
          <svg
            v-if="menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            class="nav-icon-parent"
          >
            <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              class="nav-icon-path"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hamburger-parent-container {
  transition: all 0.3s ease-in-out;
  width: 70px;
  height: 70px;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 20px;
}

.desktop-nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .nav-icon-parent {
    width: 25px;
  }

  .nav-icon-path {
    fill: #fde4e4;
  }

  .left-side {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .right-side {
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: end;
  }

  .desktop-nav-links {
    color: #FDE4E4;
    font-size: 1.3rem;
    font-family: Arial;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }
}

.hide {
  display: none;
}

.hamburger-container {
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  border-radius: 60px;
  background-color: #9d0b28;
  display: flex;
  justify-content: center;

  .nav-open-icons {
    transition: all 0.5s ease-in-out;
    padding: 0 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-closed-icon {
    padding: 0 20px;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .nav-icon-parent {
    width: 40px;
  }

  .nav-icon-path {
    fill: #fde4e4;
  }
}

.parent-open {
  transition: all 0.3s ease-in-out;
  width: calc(100% - 40px);
}

.menu-open {
  transition: all 0.3s ease-in-out;
  border-radius: 60px;
}


</style>
