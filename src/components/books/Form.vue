<template>
  <section>
    <div v-if="error" class="error">
      {{error}}
    </div>
    <div class="form">
      <h1>Add a book to your library</h1>
      <label name="name"></label>
      <input name="name" id="book" type="text" placeholder="Enter name..." />
      <button @click="click">ADD BOOK</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Form',
  props: {
    msg: String
  },
  methods: {
    click: function() {
      const book = document.getElementById('book').value
      this.$store.dispatch('storeBook', book)
      this.$router.push('/books')
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
