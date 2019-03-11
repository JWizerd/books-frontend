<template>
  <div id="nav">
    <div class="auth-links" v-if="isAuthenticated">
      <router-link to="/">Home</router-link>
      <strong>|</strong>
      <router-link to="/books/create">Create a Book</router-link>
      <strong>|</strong>
      <router-link to="/logout">Logout</router-link>
    </div>

    <div v-else>
      <router-link to="/login">Login</router-link>
      <strong>|</strong>
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
import authenticated from "@/helpers/authenticated";

export default {
  name: "Nav",
  computed: {
    isAuthenticated() {
      return authenticated();
    }
  }
};
</script>