<template>
  <section>
    <div v-if="error" class="error">
      {{error}}
    </div>
    <div class="form">
      <h1>Login</h1>
      <label name="name"></label>
      <input name="name" id="name" type="text" placeholder="Enter name..." />

      <label name="email"></label>
      <input name="email" id="email" type="text" placeholder="Enter email..." />

      <label name="password"></label>
      <input name="password" id="password" type="text" placeholder="Enter password..." />

      <button @click="click">ADD BOOK</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    click: function() {
      const name = document.getElementById('book').value
      const email = document.getElementById('email').value

      this.$store.dispatch('login', {email, password})
    }
  },
  computed: {
    error: function() {
      return this.$store.getters.error;
    }
  }
}
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
