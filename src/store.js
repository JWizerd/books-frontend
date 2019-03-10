import Vue from "vue";
import Vuex from "vuex";
import Book from "@/http/Book";
import Auth from '@/http/Auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    errors: [],
    authenticated: 0
  },
  mutations: {
    setBook(state, country) {
      state.books.push(country);
    },
    setError(state, error) {
      state.errors.push(error);
    },
    deleteBook(state, book) {
      const filtered = state.books.filter((item, index) => index !== book);
      state.books = filtered;
    },
    setAuthenticated(state) {
      state.autheticated = 1;
    }
  },
  getters: {
    books: state => state.books,
    errors: state => state.errors,
    authenticated: state => state.authenticated
  },
  actions: {
    storeBook({ commit }, book) {
      get(`https://restcountries.eu/rest/v2/name/${book}`)
        .then(books => commit("setBook", books.data[0]))
        .catch(errors => commit("setError", errors.message));
    },
    logout({ commit, state }, user) {
      try {
        new Auth.login(user)
          .then(auth => {
            console.log(auth)
          })
          .catch(error => commit("setError", error.message));
      } catch (error) {
        commit("setError", error.message);
      }
    },
    getUser() {

    }
  }
});
