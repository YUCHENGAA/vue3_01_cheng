<template>
  <LoginPage />
  <PolicyView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PolicyView from './page/PolicyView.vue';
import LoginPage from './page/LoginPage.vue';
export default defineComponent({
  name: 'App',
  components: {
    PolicyView,
    LoginPage
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  min-height: 100vh;
  background-color: #dce8f5;
  padding: 2rem;
  /* font-family: 'Noto Sans TC', 'Segoe UI', sans-serif; */
}
</style>
