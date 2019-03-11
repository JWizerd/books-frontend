<template>
  <section class="w-full max-w-xs mt-10 mb-4">
    <form @submit.prevent="submit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1>Update a book</h1>
      <hr>

      <div v-for="(error, key) in errors" :key="key">
        <strong>{{error}}</strong>
      </div>
      <div v-if="error" class="error">{{error}}</div>

      <div class="mb-4">
        <label name="title">Title</label>
        <input
          v-model.trim="$v.book.title.$model"
          name="title"
          type="text"
          placeholder="Reading for dummies"
          class="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
        >
        <div class="text-red" v-if="!$v.book.title.required">
          <small>required</small>
        </div>
      </div>

      <div class="mb-4">
        <label name="description">Description</label>
        <input
          v-model.trim="$v.book.description.$model"
          name="description"
          type="text"
          placeholder="I like me some readin'"
          class="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
        >
        <div class="text-red" v-if="!$v.book.description.required">
          <small>required</small>
        </div>
      </div>

      <div class="mb-4">
        <label name="publication_date">Publication Date</label>
        <input
          v-model.trim="$v.book.publication_date.$model"
          name="publication_date"
          type="date"
          class="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
        >
        <div class="text-red" v-if="!$v.book.publication_date.required">
          <small>required</small>
        </div>
      </div>

      <div class="mb-4">
        <label name="author">Author First Name</label>
        <input
          v-model.trim="$v.book.author.first_name.$model"
          name="author_first_name"
          type="text"
          placeholder="Joey"
          class="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
        >
        <div class="text-red" v-if="!$v.book.author.first_name.required">
          <small>required</small>
        </div>
      </div>

      <div class="mb-4">
        <label name="author">Author Last Name</label>
        <input
          v-model.trim="$v.book.author.last_name.$model"
          name="author_last_name"
          type="text"
          placeholder="Matone"
          class="appearance-none border rounded w-full py-2 px-3 focus:outline-none"
        >
        <div class="text-red" v-if="!$v.book.author.last_name.required">
          <small>required</small>
        </div>
      </div>

      <button
        type="submit"
        class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >SUBMIT</button>
    </form>
  </section>
</template>

<script>
import Book from "@/http/Book";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Form",
  data() {
    return {
      isUpdating: false,
      book: {
        title: "",
        description: "",
        publication_date: "",
        author: {
          first_name: "",
          last_name: ""
        }
      },
      errors: {}
    };
  },
  validations: {
    book: {
      title: {
        required,
        minLength: minLength(4)
      },
      description: {
        required,
        minLength: minLength(10)
      },
      publication_date: {
        required
      },
      author: {
        first_name: {
          required
        },
        last_name: {
          required
        }
      }
    }
  },
  methods: {
    submit() {
      const book = {
        title: this.book.title,
        description: this.book.description,
        publication_date: this.book.publication_date,
        author: `${this.book.author.first_name} ${this.book.author.last_name}`
      };

      if (this.isUpdating) {
        this.updateBook(book);
      } else {
        this.createBook(book);
      }
    },
    updateBook(book) {
      new Book()
        .update(this.book.id, book)
        .then(() => {
          this.$router.push("/");
        })
        .catch(error => {
          const errors = { ...this.errors };
          errors[`book-${Date.now()}`] = error.message;
          this.errors = errors;
        });
    },
    createBook(book) {
      new Book()
        .store(book)
        .then(() => {
          this.$router.push("/");
        })
        .catch(error => {
          const errors = { ...this.errors };
          errors[`book-${Date.now()}`] = error.message;
          this.errors = errors;
        });
    }
  },
  beforeMount() {
    if (this.$route.params.hasOwnProperty("id")) {
      new Book()
        .get(this.$route.params.id)
        .then(book => {
          this.book = book.data;
        })
        .catch(error => {
          const errors = { ...this.errors };
          errors[`book-${Date.now()}`] = error.message;
          this.errors = errors;
        });

      this.isUpdating = true;
    }
  },
  computed: {
    error: function() {
      return this.$store.getters.error;
    }
  }
};
</script>
