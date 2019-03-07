import Vue from 'vue'
import Vuex from 'vuex'
import { get } from '@/helpers/http.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    errors: []
  },
  mutations: {
    setBook(state, country) {
      state.books.push(country)
    },
    setError(state, error) {
      state.errors.push(error)
    },
    deleteBook(state, book) {
      const filtered = state.books.filter((item,index) => index !== book)
      state.books = filtered
    }
  },
  getters: {
    books: state => state.books,
    errors: state => state.errors
  },
  actions: {
    storeBook: function({commit}, book) {
      get(`https://restcountries.eu/rest/v2/name/${book}`)
      .then(books => commit('setBook', books.data[0]))
      .catch(errors => commit('setError', errors.message))
    }
  }
})