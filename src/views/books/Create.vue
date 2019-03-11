<template>
  <section class="w-full max-w-xs mt-10 mb-4">
    <form @submit.prevent="submit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2>Add a book to your library</h2>
      <hr>
      <div v-for="(error, key) in errors" :key="key">
        <strong>{{error}}</strong>
      </div>
      <div v-if="error" class="error">{{error}}</div>
      <div class="mb-4">
        <label name="title">Title</label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
          v-model.trim="book.title"
          name="title"
          type="text"
          placeholder="Reading for dummies"
        >
      </div>

      <div class="mb-4">
        <label name="description">Description</label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
          v-model.trim="book.description"
          name="description"
          type="text"
          placeholder="I like me some readin'"
        >
      </div>

      <div class="mb-4">
        <label name="publication_date">Publication Date</label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
          v-model.trim="book.publication_date"
          name="publication_date"
          type="date"
        >
      </div>

      <div class="mb-4">
        <label name="author">Author</label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
          v-model.trim="book.author"
          name="author"
          type="text"
          placeholder="Joey Matone"
        >
      </div>

      <button
        type="submit"
        class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >ADD BOOK</button>
    </form>
  </section>
</template>

<script>
import Book from "@/http/Book";

export default {
  name: "Create",
  data() {
    return {
      book: {
        title: "",
        description: "",
        publication_date: "",
        author: ""
      },
      errors: {}
    };
  },
  methods: {
    submit() {
      new Book()
        .store(this.book)
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
  computed: {
    error: function() {
      return this.$store.getters.error;
    }
  }
};
</script>
