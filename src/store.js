import Vue from "vue";
import Vuex from "vuex";
import Book from "@/http/Book";
import Auth from '@/http/Auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    errors: [],
    user: {}
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
    setUser(state, user) {
      state.user = user
    },
    removeUser(state) {
      state.user = {}
    }
  },
  getters: {
    books: state => state.books,
    errors: state => state.errors,
    user: state => state.user
  },
  actions: {
    storeBook({ commit }, book) {
      get(`https://restcountries.eu/rest/v2/name/${book}`)
        .then(books => commit("setBook", books.data[0]))
        .catch(errors => commit("setError", errors.message));
    },
    logout({ commit }) {
      try {
        new Auth().logout()
          .then(auth => {
            commit("removeUser")
            window.localStorage.removeItem('userToken');
            window.localStorage.removeItem("authenticated");
          })
          .catch(error => commit("setError", error.data.message));
      } catch (error) {
        commit("setError", error.message);
      }
    },
    login({ commit, dispatch }, user) {
      try {
        new Auth()
          .login(user)
          .then(auth => {
            window.localStorage.setItem("userToken", auth.data.token);
            window.localStorage.setItem("authenticated", true);
            dispatch("cacheUser");
          })
          .catch(error => commit("setError", error.data.message));
      } catch (error) {
        commit("setError", error.message);
      }
    },
    cacheUser({ commit }) {
      try {
        new Auth()
          .getUser()
          .then(user => {
            commit("setUser", user.data)
          })
          .catch(error => commit("setError", error.message));
      } catch (error) {
        commit("setError", error.message);
      }
    }
  }
});
