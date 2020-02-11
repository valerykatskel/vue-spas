<template>
  <div id="app">
    <Navigation />
    <router-view class="container" :user="user" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import firebase from "firebase";
export default {
  name: "app",
  data: function() {
    return {
      user: null
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user.email;
      }
    });
  },
  components: { Navigation }
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "~bootstrap/scss/bootstrap";
</style>
