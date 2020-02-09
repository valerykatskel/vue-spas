import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Meetings from "../views/Meetings.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/meetings",
    name: "meetings",
    component: Meetings
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "*",
    name: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
