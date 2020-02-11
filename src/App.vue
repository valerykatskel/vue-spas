<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view class="container" :user="user" @logout="logout" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import firebase from "firebase";
import db from "./db.js";
export default {
  name: "app",
  data: function() {
    return {
      user: null
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("login");
        });
    }
  },
  mounted() {
    db.firestore();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user.displayName || user.email;
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
