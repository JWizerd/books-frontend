<template>
  <section>
    <div v-if="error" class="error">{{error}}</div>
    <div class="form">
      <h1>Add a book to your library</h1>
      <label name="title">Title</label>
      <input v-model.trim="book.title" name="title" type="text" placeholder="Reading for dummies">
      
      <label name="description">Description</label>
      <input
        v-model.trim="book.description"
        name="description"
        type="text"
        placeholder="I like me some readin'"
      >
      
      <label name="publication_date">Publication Date</label>
      <input v-model.trim="book.publication_date" name="publication_date" type="date">
      
      <label name="author">Author</label>
      <input v-model.trim="book.author" name="author" type="text" placeholder="Joey Matone">
      
      <button @click="store">ADD BOOK</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      book: {
        title: "",
        description: "",
        publication_date: "",
        author: ""
      }
    };
  },
  methods: {
    store() {
      this.$store.dispatch("storeBook", this.book);
      this.$router.push("/books");
    }
  },
  computed: {
    error: function() {
      return this.$store.getters.error;
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
