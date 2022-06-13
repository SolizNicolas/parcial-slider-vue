<template>
  <NavbarBanner />
  <router-view></router-view>
</template>

<script>
import NavbarBanner from "./components/NavbarBanner.vue";

export default {
  name: "App",
  components: {
    NavbarBanner,
  },
};
</script>

<style></style>
