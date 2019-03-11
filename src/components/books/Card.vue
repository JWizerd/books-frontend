<template>
  <li class="book-card">
    <h1>{{book.title}}</h1>
    <hr>
    <p v-if="book.author">By: {{book.author.first_name}} {{book.author.last_name}}</p>
    <hr>
    <p v-if="book.description">{{book.description}}</p>
    <div>
      <button class="button button--warn" @click="deleteBook">DELETE</button>
    </div>
  </li>
</template>

<style lang="scss">
.button {
  padding: 10px 25px;
  border: none;
  font-size: 1em;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: #333;
  }
}

.button--warn {
  background: red;
  color: white;
}

.icon--red {
  color: red;
}
.right {
  float: right;
}
</style>

<script>
import Book from "@/http/Book";

export default {
  name: "card",
  props: ["book", "index"],
  methods: {
    deleteBook() {
      new Book().destroy(this.book.id);
      this.$emit("book-deleted");
    }
  }
};
</script>
