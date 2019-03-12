<template>
  <section class="mt-10 mb-10">
    <h2 class="text-center mb-5">Library</h2>
    <hr>
    <ul v-if="books" class="books">
      <Card v-for="book in books" :book="book" :key="book.id" @book-deleted="loadBooks"/>
    </ul>
    <div v-else>No books here yet! Go ahead and add some!</div>
  </section>
</template>

<style lang="scss">
.books {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>

<script>
import Card from "@/components/books/Card.vue";
import Book from "@/http/Book";

export default {
  name: "List",
  components: { Card },
  data() {
    return {
      current_page: 0,
      books: {},
      errors: {}
    };
  },
  beforeMount() {
    this.loadBooks();
  },
  methods: {
    loadBooks() {
      new Book()
        .show()
        .then(books => {
          this.books = books.data.data;
          this.current_page = books.data.current_page;
        })
        .catch(error => {
          this.errors[`book-${Date.now()}`] = error.message;
        });
    }
  }
};
</script>
