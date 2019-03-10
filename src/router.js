import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Create from "./views/books/Create.vue";
import List from "./views/books/List.vue";
import Login from "./views/user/Login.vue";
import SignUp from "./views/user/SignUp.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/books/create",
      name: "create",
      component: Create
    },
    {
      path: "/books",
      name: "list",
      component: List
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    }
  ]
});
