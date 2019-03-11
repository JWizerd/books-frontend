import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Create from "./views/books/Create.vue";
import Update from "./views/books/Update.vue";
import List from "./views/books/List.vue";
import Login from "./views/auth/Login.vue";
import SignUp from "./views/auth/SignUp.vue";
import Logout from "./views/auth/Logout.vue";
import authenticated from "./helpers/authenticated";

Vue.use(Router);

const isAuth = (to, from, next) => {
  if (!authenticated()) {
    next('/login')
  } else {
    next()
  }
}

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: List
    },
    {
      path: "/books/create",
      name: "create",
      component: Create,
      beforeEnter: isAuth
    },
    {
      path: "/books/update/:id",
      name: "update",
      component: Update,
      beforeEnter: isAuth
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
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      beforeEnter: isAuth
    }
  ]
});
