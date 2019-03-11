<template>
  <div class="books">
    <ul v-if="books">
      <Card v-for="book in books" :book="book" :key="book.id" @book-deleted="loadBooks"/>
    </ul>
    <div v-else>No books here yet! Go ahead and add some!</div>
  </div>
</template>

<script>
import Card from "@/components/books/Card.vue";
import Book from "@/http/Book";

export default {
  name: "List",
  components: { Card },
  data() {
    return {
      current_page: 0,
      books: {}
    };
  },
  mounted() {
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
        .catch(error => console.log(error));
    }
  }
};
</script>
