<template>
  <section class="w-full max-w-xs mt-10 mb-4">
    <form @submit.prevent="submit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2>Sign Up</h2>
      <hr>
      <div
        v-for="(error, key) in errors"
        :key="key"
        class="p-2 bg-red-lighter border border-red text-red-dark text-sm w-full mb-5 rounded"
      >{{error}}</div>
      <div class="mb-4">
        <label for="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          class="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
          placeholder="Enter name..."
          v-model.trim="$v.user.name.$model"
        >
        <div class="text-red" v-if="!$v.user.name.required">
          <small>required</small>
        </div>
      </div>

      <div class="mb-4">
        <label for="email">Email</label>
        <input
          name="email"
          id="email"
          v-model.trim="$v.user.email.$model"
          type="email"
          placeholder="Enter email..."
          class="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
        >
        <div class="text-red" v-if="!$v.user.email.required">
          <small>required</small>
        </div>
      </div>

      <div class="mb-4">
        <label name="password">Password</label>
        <input
          name="password"
          id="password"
          v-model.trim="$v.user.password.$model"
          type="password"
          placeholder="Enter password..."
          class="appearance-none border rounded w-full py-2 px-3"
        >
        <div class="text-red" v-if="!$v.user.password.required">
          <small>required</small>
        </div>
      </div>

      <div class="mb-4">
        <label name="verify-password">Password Confirmation</label>
        <input
          name="verify-password"
          id="verify-password"
          type="password"
          v-model.trim="$v.user.password_confirmation.$model"
          placeholder="Verify password..."
          class="appearance-none border rounded w-full py-2 px-3"
        >
        <div class="text-red" v-if="!$v.user.password_confirmation.required">
          <small>required</small>
        </div>
        <div class="text-red" v-if="!$v.user.password_confirmation.passwordConfirmation">
          <small>required</small>
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded focus:outline-none"
        >Sign Up</button>
      </div>
      <div>
        <router-link class="decoration-none text-grey pt-4" to="/login">
          <small>Already registered? Login!</small>
        </router-link>
      </div>
    </form>
  </section>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import Auth from "@/http/Auth";
import passwordConfirmation from "@/helpers/validators/passwordConfirmation";

export default {
  name: "SignUpForm",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: {}
    };
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      password: {
        required
      },
      password_confirmation: {
        required,
        passwordConfirmation
      }
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.storeUser();
      }
    },
    storeUser() {
      try {
        new Auth()
          .signup(this.user)
          .then(() => this.$router.push("/login"))
          .catch(error => {
            this.errors[`book-${Date.now()}`] = error.message;
          });
      } catch (error) {
        const errors = { ...this.errors };
        errors[`book-${Date.now()}`] = error.message;
        this.errors = errors;
      }
    }
  }
};
</script>
