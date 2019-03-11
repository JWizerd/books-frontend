<template>
  <section class="w-full max-w-xs mt-10 mb-4">
    <form @submit.prevent="submit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2>Login</h2>
      <hr>
      <div
        v-for="(error, key) in errors"
        :key="key"
        class="p-2 bg-red-lighter border border-red text-red-dark text-sm w-full mb-5 rounded"
      >{{error}}</div>
      <div class="form">
        <div class="mb-4">
          <label for="email"></label>
          <input
            v-model.trim="$v.user.email.$model"
            name="email"
            type="email"
            placeholder="Enter email..."
            class="appearance-none border rounded w-full py-2 px-3"
          >
          <div class="text-red" v-if="!$v.user.email.required">
            <small>required</small>
          </div>
        </div>

        <div class="mb-4">
          <label for="password"></label>
          <input
            v-model.trim="$v.user.password.$model"
            name="password"
            type="password"
            placeholder="Enter password..."
            class="appearance-none border rounded w-full py-2 px-3"
          >
          <div class="text-red" v-if="!$v.user.password.required">
            <small>required</small>
          </div>
        </div>

        <button
          type="submit"
          class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >LOGIN</button>
      </div>
    </form>
  </section>
</template>

<script>
import Auth from "@/http/Auth";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        email: "",
        password: "",
        remember_me: false
      },
      errors: [],
      messages: []
    };
  },
  validations: {
    user: {
      email: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$error) {
        if (!this.error) {
          this.$router.push("/books");
        }
        this.$store.dispatch("login", this.user);
      }
    }
  },
  computed: {
    error: function() {
      return this.$store.getters.error;
    }
  }
};
</script>
