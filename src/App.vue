<template>
  <div id="app">
    <Navigation />
    <router-view class="container" />
  </div>
</template>

<script lang="ts">
import Navigation from "@/components/Navigation.vue";
export default {
  name: "app",
  components: { Navigation }
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "~bootstrap/scss/bootstrap";
</style>
