<template>
  <nav id="nav">
    <div class="auth-links mt-2" v-if="isAuthenticated">
      <router-link to="/" class="no-underline text-green pl-5">Books</router-link>
      <router-link to="/books/create" class="no-underline text-green pl-5">Create a Book</router-link>
      <router-link to="/logout" class="no-underline text-green pl-5">Logout</router-link>
    </div>

    <div v-else>
      <router-link to="/login" class="no-underline text-green pl-5">Login</router-link>
      <router-link to="/signup" class="no-underline text-green pl-5">Sign Up</router-link>
    </div>
  </nav>
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