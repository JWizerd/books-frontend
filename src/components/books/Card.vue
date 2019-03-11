<template>
  <li class="book-card border-black p-10 mt-10 mb-10 bg-white rounded-b shadow">
    <div class="mb-8">
      <h3>{{book.title}}</h3>
      <hr>
      <p class="text-grey-darker text-base" v-if="book.description">{{book.description}}</p>
      <hr>
    </div>
    <div class="text-sm">
      <p class="text-black leading-none">By: {{book.author.first_name}} {{book.author.last_name}}</p>
      <p class="text-grey-dark mt-2">Published: {{ book.publication_date }}</p>
    </div>
    <div class="mt-3">
      <button
        class="bg-red hover:bg-red-dark text-white py-2 px-4 rounded focus:outline-none mr-2 text-sm"
        @click="deleteBook"
      >DELETE</button>
      <router-link
        :to="{ name: 'update', params: { id: book.id }}"
        class="bg-green hover:bg-green-dark text-white py-2 px-4 rounded focus:outline-none text-sm"
        tag="button"
      >UPDATE</router-link>
    </div>
  </li>
</template>

<script>
import Book from "@/http/Book";

export default {
  name: "card",
  props: ["book", "index"],
  methods: {
    deleteBook() {
      new Book().destroy(this.book.id).then(() => this.$emit("book-deleted"));
    }
  }
};
</script>
