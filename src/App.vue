<template>
  <!-- <LoginPage v-if="!isLoggedIn" @login-success="isLoggedIn = true"/>
  <PolicyPage v-else/>
  <CartPage />
  <div>
    <SearchPage />
  </div> -->
  <div class="app-layout">
    <AppSidebar :items="demoNavItems" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import AppSidebar from "./components/AppSidebar.vue";
import { demoNavItems } from "./router";

const route = useRoute();

// export default defineComponent({
//   name: 'App',
//   components: {
//     PolicyPage,
//     LoginPage,
//     CartPage,
//     SearchPage
//   },
// setup() {
//     const isLoggedIn = ref(false);
//     return { isLoggedIn };
//   }
// });
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // margin-top: 60px;
}
body {
  min-height: 100vh;
  background-color: #dce8f5;
}
// .app-layout {
//   min-height: 100vh;
//   display: grid;
//   grid-template-columns: 300px minmax(0, 1fr);
// }

// // 讓 RouterView 的內容區域佔滿剩餘空間
// .app-layout > :last-child {
//   flex: 1;
// }
</style>
