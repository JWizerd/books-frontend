<template>
  <section>
    <div v-for="(error, key) in errors" :key="key">
      <strong>{{error}}</strong>
    </div>
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
      
      <label name="author">Author First Name</label>
      <input
        v-model.trim="book.author.first_name"
        name="author_first_name"
        type="text"
        placeholder="Joey"
      >
      
      <label name="author">Author Last Name</label>
      <input
        v-model.trim="book.author.last_name"
        name="author_last_name"
        type="text"
        placeholder="Matone"
      >
      
      <button @click="update">UPDATE BOOK</button>
    </div>
  </section>
</template>

<script>
import Book from "@/http/Book";

export default {
  name: "Update",
  data() {
    return {
      book: {},
      errors: {}
    };
  },
  methods: {
    update() {
      const book = {
        title: this.book.title,
        description: this.book.description,
        publication_date: this.book.publication_date,
        author: `${this.book.author.first_name} ${this.book.author.last_name}`
      };

      new Book()
        .update(this.book.id, book)
        .then(() => {
          this.$router.push("/books");
        })
        .catch(error => {
          const errors = { ...this.errors };
          errors[`book-${Date.now()}`] = error.message;
          this.errors = errors;
        });
    }
  },
  beforeMount() {
    new Book().get(this.$route.params.id).then(book => {
      this.book = book.data;
    });
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
