<template>
  <section class="mt-10 mb-10">
    <h2 class="text-center mb-5">Library</h2>
    <button
      @click="sortByAuthor"
      class="bg-green-dark hover:bg-green-light text-white py-2 px-4 rounded focus:outline-none text-sm mr-2"
    >Sort by Author</button>
    <button
      @click="reload"
      class="bg-green-dark hover:bg-green-light text-white py-2 px-4 rounded focus:outline-none text-sm"
    >Reload</button>
    <hr>
    <ul v-if="books" class="books p-0">
      <Card v-for="book in books" :book="book" :key="book.id" @book-deleted="loadBooks"/>
    </ul>
    <div v-else>No books here yet! Go ahead and add some!</div>
  </section>
</template>

<style lang="scss">
.books {
  list-style: none;
  display: grid;
  grid-gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
      authorName: "",
      current_page: 0,
      books: [],
      errors: {}
    };
  },
  beforeMount() {
    this.loadBooks();
  },
  methods: {
    reload() {
      this.loadBooks();
    },
    sortByAuthor() {
      const booksSortedByAuthor = this.books.sort(function(a, b) {
        const authorLastNameA = a.author.last_name.toLowerCase();
        const authorLastNameB = b.author.last_name.toLowerCase();

        if (authorLastNameA < authorLastNameB) {
          return -1;
        }
        if (authorLastNameA > authorLastNameB) {
          return 1;
        }
        return 0;
      });

      this.books = booksSortedByAuthor;
    },
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
