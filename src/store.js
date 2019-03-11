import Vue from "vue";
import Vuex from "vuex";
import Book from "@/http/Book";
import Auth from '@/http/Auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: {},
    errors: {},
    user: {}
  },
  mutations: {
    setBook(state, books) {
      state.books = books;
    },
    setError(state, error) {
      state.errors.push(error);
    },
    deleteBook(state, book) {
      delete (state.books[`${book.key}`])
    },
    setUser(state, user) {
      state.user = user
    },
    removeUser(state) {
      delete state.user
    }
  },
  getters: {
    books: state => state.books,
    errors: state => state.errors,
    user: state => state.user
  },
  actions: {
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
          .catch(error => commit("setError", error.data.message));
      } catch (error) {
        commit("setError", error.message);
      }
    }
  }
});
