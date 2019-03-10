<template>
  <section>
    <div v-if="error" class="error">{{error}}</div>
    <ul v-for="(message, key) in messages" :key="key">
      <li :key="key">{{message}}</li>
    </ul>
    <div class="form">
      <h1>Register</h1>
      <label name="name"></label>
      <input name="name" id="name" type="text" placeholder="Enter name..." v-model.trim="user.name">
      
      <label name="email"></label>
      <input
        name="email"
        id="email"
        v-model.trim="user.email"
        type="email"
        placeholder="Enter email..."
      >
      
      <label name="password"></label>
      <input
        name="password"
        id="password"
        v-model.trim="user.password"
        type="password"
        placeholder="Enter password..."
      >
      
      <label name="verify-password"></label>
      <input
        name="verify-password"
        id="verify-password"
        type="password"
        v-model.trim="user.password_confirmation"
        placeholder="Verify password..."
      >
      
      <button @click="signUp">Register</button>
    </div>
  </section>
</template>

<script>
import Auth from "@/http/Auth";

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
      error: {}
    };
  },
  methods: {
    signUp() {
      try {
        new Auth()
          .signup({ ...this.user })
          .then(response => this.$router.push("/login"))
          .catch(error => (this.error = error.data.message));
      } catch (error) {
        error => (this.error = error.data.message);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.error {
  color: red;
  text-align: center;
}
</style>
