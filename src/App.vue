<template>
  <div id="app">
    <Navigation />
    <router-view class="container" :user="user" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
//import firebase from "firebase";
import db from "./db.js";
export default {
  name: "app",
  data: function() {
    return {
      user: null
    };
  },
  mounted() {
    db.collection("users")
      .doc("4umVjzruG0suT3dYeeyz")
      .get()
      .then(snapshot => {
        this.user = snapshot.data().name;
      });
  },
  components: { Navigation }
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "~bootstrap/scss/bootstrap";
</style>
