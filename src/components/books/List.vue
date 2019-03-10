<template>
  <div class="books">
    <ul>
      <li class="country" v-for="(book, key) in books" :key="key">
        <Card v-bind:book="book" v-bind:index="index"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/books/Card.vue";

export default {
  name: "List",
  components: { Card },
  computed: {
    books: function() {
      return this.$store.getters.books;
    }
  }
};
</script>
